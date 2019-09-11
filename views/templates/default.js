// console.log('config',config)

//initiation stuff

//attach src to img
for(var assetName in config.assets[lang]){
  document.getElementById(assetName).src = config.assets[lang][assetName]
}