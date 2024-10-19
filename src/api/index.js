import Chance from "chance";

const chance = Chance();

// explore chance package (-> which generates a random name (api))
export const fakeUserData = () =>{
    return(chance.name({ middle: true }));
}