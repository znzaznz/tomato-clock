import React,{FC} from 'react';
import {useHistory} from "react-router-dom"
import {Button} from "antd";

const Index:FC =  ()=>{
    const history = useHistory();
    return (
        <div>
            <Button type="primary" onClick={()=>{
                history.push("/login")
            }}>登录</Button>
        </div>
    )
}
export default Index;