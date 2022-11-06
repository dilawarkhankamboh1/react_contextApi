import React,{useReducer} from 'react';
import heroReducer from '../reducers/heroReducer';

// create context
const HeroContext= React.createContext();

// create provider
const HeroProvider=({children})=>{
const [state, dispatch] = useReducer(heroReducer, {})

// home page data
const HomePage=()=>{
    dispatch({
        type:"Home",
        name: "MernStack",
        designation: "Am MernStack Developer and FullStack Software Engineer"
    })

}
// about page data
const AboutPage=()=>{
    dispatch({
        type:"About",
        name: "React Developer",
        designation: "Am React Developer and FullStack Software Engineer"
    })

}

return <HeroContext.Provider value={{...state , HomePage , AboutPage}}>{children}</HeroContext.Provider>

}

export {HeroContext , HeroProvider};

