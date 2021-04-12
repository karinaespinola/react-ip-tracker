import React from 'react';

export const IpDataContext = React.createContext();

const IpDataProvider = (props) => {
    const initialIpData = {
        ip: '-',
        location: null,
        timezone: '-',
        isp: '-' 
    }

    const [ipData, setIpData] = React.useState(initialIpData);

    React.useEffect(() => {
        if(localStorage.getItem('ipDataLocal')) {
            const ipDataLocal = JSON.parse(localStorage.getItem('ipDataLocal'));
            setIpData(ipDataLocal);
        }
    }, []);

    const updateIpData = (value) => {
        setIpData(value);
        localStorage.setItem('ipDataLocal', JSON.stringify(value));
    }

    return (
       <IpDataContext.Provider value={{ipData, updateIpData}}>
           {props.children}
       </IpDataContext.Provider>
    )
}

export default IpDataProvider
