import React from 'react';
import WebHomeInsideList from './WebHomeInsideList'


const WebHomeInsideList2=({WebHomeInsideData}) => {

    return (
        <div>
            {
                WebHomeInsideData.map((user,i) => {
                    return (
                        <WebHomeInsideList
                            key={WebHomeInsideData[i].id}
                            id={WebHomeInsideData[i].id} 
                            name={WebHomeInsideData[i].name}
                            username={WebHomeInsideData[i].username} 
                            website={WebHomeInsideData[i].website}
                        />  
                    );
            
                })
            }                  
        </div>       
    );
}
export default  WebHomeInsideList2;