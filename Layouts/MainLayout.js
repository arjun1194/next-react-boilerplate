

import React from 'react';
import {PageHeader,Button } from 'antd';



const MainLayout = (props)=>{


    return(
        <div>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="Github Compare"
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                        Primary
                    </Button>,
                ]}
            />
            <div style={{padding:'25px'}}>
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout;