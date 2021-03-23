async function tempo(request, response) {
    const apiUrl = process.env.CEP_URL;
    const dynamicDate = new Date();
    const msInicio = dynamicDate.getMilliseconds();
    
    const paramTypoResponseCepApi = "/json/";
    const url = `${apiUrl}04265050` + paramTypoResponseCepApi;
    const ruaResponse = await fetch(url);
    const ruaResponseJson = await ruaResponse.json();
    const rua = ruaResponseJson.logradouro;
    
    const dynamicDateFim = new Date();
    const msFim = dynamicDateFim.getMilliseconds();

    response.json({
        Data_Inicio: dynamicDate.toUTCString(),
        ms_Inicio: msInicio,
        Logradouro: rua,
        Data_Fim: dynamicDateFim.toUTCString(),        
        ms_Fim: msFim
    })
}

export default tempo;