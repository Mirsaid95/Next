import React from "react";
import logo from "../../assets/Next.svg";
import {Burger} from "../../assets/icons/burger";
import {Search} from "../../assets/icons/search";
import {Heart} from "../../assets/icons/heart";
import {Shop} from "../../assets/icons/shopping";
import {Message} from "../../assets/icons/message";





export const Header = () =>{
    return(
        <header>
            <div className="w-[100%]">
                <div>
                    <Message/>
                    <p>Aloqa uchun</p>
                </div>
            </div>
        </header>
    )
}



