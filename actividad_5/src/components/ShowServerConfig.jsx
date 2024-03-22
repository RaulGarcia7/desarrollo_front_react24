
function ShowServerConfig( config ) {

    if (
        typeof config.minConnections !== "number" ||
        typeof config.maxConnections !== "number" ||
        typeof config.restartAlways !== "boolean"
    ){
        return <p>Error: La estructura de configuración no es correcta.</p>
    }

    const envAllowed = ["dev", "play", "live"];
    if (!envAllowed.includes(config.environment)){
        return <p>Error: El entorno no es compatible.</p>
    }

    if (config.environment == "live" && !config.SSL){
        return <p>Error: Si el entorno es "Live", SSL debe ser obligatorio.</p>
    }

    return(
        <>
            <h3>Configuración de server</h3>
            <p>Min. Connections: {config.minConnections}</p>
            <p>Max. Connections: {config.maxConnections}</p>
            <p>Restart Always: {config.restartAlways.toString()}</p>
            <p>Environment: {config.environment}</p>
            <p>SSL: {config.SSL ? "Si" : "No" }</p>
        </>
    );
    
}

export default ShowServerConfig;