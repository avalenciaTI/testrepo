//Add Test Cases to the Framework

function TestBegin() {
    // 1. Leer el archivo de configuración
    var config = File.ReadJSON("Config.json");
    var env = config.AmbienteActivo; // Devolverá "QA"
    
    // 2. Cargar dinámicamente la data del ambiente correcto
    Global.SetProperty("RutaDataAmbiente", "Data/Data_" + env + ".xlsx");
    
    Tester.Message("Ejecutando pruebas en el ambiente: " + env);
}

