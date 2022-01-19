import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph = (props) => {
    return (
        <>
            <Line
            data={{
                labels:['','','','','','','','',''],
                datasets: [{
                    label:'' ,
                    data: props.data,
                    fill: true,
                    borderColor: '#603E94', 
                    backgroundColor:[
                        'rgba(147, 115, 196, 0.7)'
                    ],
                    tension: 0.1
                  }]
            }}
            height={100}
            width={200}
            options={{
                maintainAspectRatio: false,
                animations: {
                    tension: {
                      duration: 3000,
                      easing: 'easeOutQuart',
                      from: 0.3,
                      to: 0.2,
                      loop: true
                    }
                  },
              
            }}
            />
                
        </>
    );
};

export default LineGraph;