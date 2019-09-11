//initiation stuff
//assuming side by side

//attach src to img
for(var assetName in config.assets[lang]){
  try{
    document.getElementById(assetName).src = config.assets[lang][assetName]
  }
  catch(e){}
}
if(config.template[0] === "side-by-side")
  if(config.template[1].includes("left")){
    console.log('miroring disposition')
  }