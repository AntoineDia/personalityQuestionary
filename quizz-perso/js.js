function Timer(){

  let started, startTime, endTime, duration = 0

  this.start = function(){
    if(started)
      throw new Error('cant start twice')
    started = true
    startTime = new Date
  }

  this.stop = function(){
    if(!started)
      throw new Error("cant stop what hasn't start")
    started = false
    endTime = new Date

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000
    duration += seconds
  }

  this.reset = function(){
    startTime = null
    endTime = null
    running = false
    duration = 0
  }

  Object.defineProperty(this, 'duration',{
    get: function(){ return duration + 's' }
  })

}

function Questionary(name){
  this.name = name
}