var existing_reward = query.reward //''//'{{REWARD}}'
var existing_reward_id = query.reward_id//'{{REWARDID}}'
var existing_coupon = query.coupon//{{COUPON}}'

polyfill();

var TOTAL_SPIN_TIME = 6000;
var START_SPIN_TIME = 7000;

var search = window.location.search.split('?').join('').split('&')
var countrySearch = search.filter(function(s){ return !!~s.indexOf('country')})[0]
var country = query.country || countrySearch ? countrySearch.split('=')[1] : 'be';

var langSearch = search.filter(function(s){ return !!~s.indexOf('lang')})[0]
var lang = query.lang || langSearch ? langSearch.split('=')[1] : 'fr';

var validation = {
  notfalse : function(value){
    return !!value
  },
  notempty : function(value){
    if(value && value.length) return true;
    return false;
  },
  email : function(value){
    if(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value)) return true;
    return false;
  },
  name : function(value){
    if(!value)            return false;
    if(/\d/.test(value))  return false;
    return true
  },
  date : function(value){
    if(!value) return false;
    var vs = (''+value).trim().split('-')
    if(vs.length == 3 && vs[0].length == 4){
      value = vs.reverse().join('-')
    }
    var cleaned = value
      .split('/').join('')
      .split('-').join('')
      .split('.').join('')
      .split(' ').join('')
      .split('_').join('').slice(0,8);
    var day = cleaned.slice(0,2)
    var month = cleaned.slice(2,4)
    var year = cleaned.slice(4, 8);
    if(! (parseInt(day) < 32 && parseInt(day) > 0 ) ){
      return false;
    }
    if(! (parseInt(month) < 13 && parseInt(month) > 0 ) ){
      return false;
    }
    var nowY = (new Date()).getFullYear()
    var minAge = 18;
    var maxAge = 90;
    if(! (parseInt(year) < (nowY-minAge) && parseInt(year) > (nowY-maxAge) ) ){
      return false;
    }
    return true
  }
}

var format = {
  date : function(value){
    if(value.length){
      var cleaned = value
        .split('/').join('')
        .split('-').join('')
        .split('.').join('')
        .split(' ').join('')
        .split('_').join('').slice(0,8);
      var end = []
      cleaned.split('').forEach(function(letter, i){
        end.push(letter);
        if(i == 1|| i == 3) end.push('/');
      })
      return end.join('');
    }
  }
}

var app = new Vue({
  el: '#app',
  data: {
    txt : textes[lang],
    lang: lang,
    status: existing_reward ? 'thanks' : 'formulaire',
    reward: existing_reward_id,
    rewardName : existing_reward ? existing_reward : '',
    coupon: existing_coupon,
    response: {},
    run: existing_reward_id ? true: false,
    inputs: form[lang],
    errors : {},
    suggestion_email: null
  },
  computed : {
    cleaned : function(){
      return this.inputs.reduce(function(tot, input){
        tot[input.name] = input.value;
        return tot;
      }, {})
    },
    wheelClass : function(state){
      var none = '';
      var newClass = {
        'ready' : state.status === 'game' && !status.run,
        'constant-rotation' : state.status === 'formulaire',
        <%
          var rewards = config.reward_ids && config.reward_ids[query.lang] ? config.reward_ids[query.lang] : config.rewards
          rewards.forEach( (reward, index) => {
            if( !!~reward.indexOf('|') ){
              let s = reward.split('|')
              %>
                'reward-<%= index+1 %>' : state.run && (state.reward == <%= s[0] %> || state.reward == <%= s[1] %>),
              <%
            }
            else {
              %>
                'reward-<%= index+1 %>' : state.run && state.reward == <%= reward %>,
              <%
            }
          })
        %>
      }
      var hasOneTrue = Object.keys(newClass).reduce(function(tot, key){
        if(newClass[key]) tot = true
        return tot
      }, false)
      if(!hasOneTrue) newClass['constant-rotation'] = true
      return newClass
    },
  },
  methods: {
    chooseSuggestion: function(){
      this.inputs = this.inputs.map(function(input){
        if(input.type == 'email') input.value = this.suggestion_email
        return input;
      }.bind(this))
      this.suggestion_email = null;
    },
    checkEmailSuggestion: function(){
      const email = this.inputs.filter(function(input) {
        if(input.type == 'email') return true;
        return false
      }).map(function(input){ return input.value })[0]
      if(email){
        Mailcheck.run({
          email: email,
          suggested: function(suggestion) {
            this.suggestion_email = suggestion.full
          }.bind(this),
          empty: function() {
            this.suggestion_email = null
          }.bind(this)
        });
      }
    },
    optout : function(event){
      this.submitForm(event, true);
    },
    getErrors : function(){
      this.errors = this.inputs.reduce(function(tot, input) {
        tot[input.name] = false;
        var validFn = validation[input.validation];
        if(validFn) tot[input.name] = !validFn(input.value);
        return tot;
      }, {});
    },
    format : function(event){
      var id = event.target.id;
      var input = this.inputs.find(function(input){
        return input.name === id;
      })
      if(input.format) input.value = input.format(input.value);
    },
    hasError : function(input){
      return this.errors[input.name]
    },
    radioChange: function(event){
      var value = event.target.value;
      var name = event.target.name;
      var input = this.inputs.find(function(input){
        return input.name === name;
      });
      input.value = value;
    },

    submitForm: function(event, optout){
      event.preventDefault();
      this.getErrors();
      var numberOfError = this.inputs.map(function(input){
        return this.errors[input.name]
      }.bind(this)).filter(function(err){return err; }).length;
      if(numberOfError) return ;
      var data = this.cleaned
      if(optout) data.newsletters = false;
      else data.newsletters = true;
      if(this.submited) return console.log('already submited');
      if(window.LUCKY_HOOKS.beforeEdit && typeof window.LUCKY_HOOKS.beforeEdit == 'function') window.LUCKY_HOOKS.beforeEdit()
      this.submited = true;
      this.$http.put('/api/'+LUCKY.operation+'/edit/'+window.LUCKY.hash, data)
      .then(function(response){
        this.submited = false;
        this.status = 'game';
        this.response = response.body.played;
        if(this.response.result_text == 'cannot_play'){
          this.status = 'cannotplay';
          if(window.LUCKY_HOOKS.cannotPlay && typeof window.LUCKY_HOOKS.cannotPlay == 'function') (window.LUCKY_HOOKS.cannotPlay.bind(this))()
          return;
        }
        this.reward = this.response.reward_id;
        this.rewardName = this.response.reward_name;
        this.coupon = this.response.coupon || this.response.reward_code;
        if(window.LUCKY_HOOKS.onResult && typeof window.LUCKY_HOOKS.onResult == 'function') (window.LUCKY_HOOKS.onResult.bind(this))(response.body)
        setTimeout(function(){
          this.spin();
        }.bind(this), START_SPIN_TIME);
      }.bind(this))
      .catch(function(e){
        this.status = 'cannotplay';
        if(window.LUCKY_HOOKS.cannotPlay && typeof window.LUCKY_HOOKS.cannotPlay == 'function') (window.LUCKY_HOOKS.cannotPlay.bind(this))()
      }.bind(this))
    },
    spin : function(e){
      if(this.run) return;
      this.run = true;
      setTimeout(function(){
        var r = {
          rewardName: this.rewardName,
          rewardId: this.reward,
          coupon: this.coupon,
          poke_url: location.pathname
        }
        this.status = 'thanks';
        window.parent.postMessage('SPINEND||'+JSON.stringify(r), '*');
        if(window.LUCKY_HOOKS.spinEnd && typeof window.LUCKY_HOOKS.spinEnd == 'function') (window.LUCKY_HOOKS.spinEnd.bind(this))(r)
      }.bind(this), TOTAL_SPIN_TIME)
    }
  }
});

function polyfill(){
    if (!Array.prototype.find) {
      Object.defineProperty(Array.prototype, 'find', {
      value: function(predicate) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      var o = Object(this);
      var len = o.length >>> 0;
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var thisArg = arguments[1];
      var k = 0;
      while (k < len) {
            var kValue = o[k];
            if (predicate.call(thisArg, kValue, k, o)) {
              return kValue;
            }
            // e. Increase k by 1.
            k++;
          }

          // 7. Return undefined.
          return undefined;
        },
        configurable: true,
        writable: true
      });
    }

    }