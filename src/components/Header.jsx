import React, {useContext} from 'react'
import MyContext from '../context/MyContext'

const Header = () => {
    const shop = useContext(MyContext)
    const {categories,select, setSelect} = shop

    return (
        <div className="header" >
           <label >CHOOSE A CATEGORY</label>
            <select value={select} onChange={(e)=> setSelect(e.target.value) } >
                {categories.map((category,index) => <option key={index} value={category}>{category}</option> )}   
            </select> 
        </div>
    )
}

export default Header
