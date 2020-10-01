import React from "react";
import Sdata from "./Sdata";
import Card from "./Card"

const Project = () =>{
    return(
    <>
    <div className="my-5">
        <h1 className="text-center">Our Services</h1>
    </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="row row-cols-1 row-cols-md-2 gy-4 gx-4">
                      
                      
                      {  
                        Sdata.map((val, ind)=>{
                            return <Card
                            vidsrc={val.vidsrc}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            />
                        }

                        )
                         
                      }
                        
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};
export default Project;