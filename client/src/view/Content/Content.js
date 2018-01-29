import React from 'react';

import './Content.css';

const Content = () => (
    <div className='content content-resp'>
        {
            (()=>{
                var fake =[];
                for (var i=0; i<100; i++) {
                    fake.push(<span key={i + '1'}>Content</span>);
                    fake.push(<br key={i + '2'}/>);
                }
                return fake;
            })()
        }
    </div>
)

export default Content;