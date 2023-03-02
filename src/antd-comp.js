import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'antd';

export const TestWebComponent = (props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        console.log('TestWebComponent didMount');

        return () => {
            console.log('TestWebComponent removed');
        };
    }, []);

    function onClick() {
        console.log('TestWebComponent', 'onClick');
    }

    return visible ? (
        <div style={{ color: 'blue' }} className="test-web-component" onClick={() => onClick()}>
            <Button>TestWebComponent</Button>
        </div>
    ) : null;
};
