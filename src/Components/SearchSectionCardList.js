import React from 'react';
import SectionCard from '../Components/SearchSectionCard';
const SectionCardList = ({ SectionCardTypes }) => {
    return (
    <div>
        {
              
            // {cardCom}.slice(0, 5)
            SectionCardTypes.map((user, i) => {
                return (
                <SectionCard
                            key={i}
                            id={SectionCardTypes[i]._id}
                            title={SectionCardTypes[i].name}
                            source={SectionCardTypes[i].url}
                            p={SectionCardTypes[i].description}
                        />
                );
            })
        }
    </div>
);
}
export default SectionCardList;