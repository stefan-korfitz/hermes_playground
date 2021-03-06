import React, { Component } from 'react';
import Svg,{ G, Path, Polygon } from 'react-native-svg';

const fill = "#5AFFE1";

export default class Brand_logo extends Component {
    render() {

        return (
            <Svg
                height="100.187"
                width="136.025"
                viewportHeight="100.187"
                viewportWidth="136.025"
                //version="1.1"
                //id="Layer_1_1_"
                //xmlns="http://www.w3.org/2000/svg"
                //xmlns:xlink="http://www.w3.org/1999/xlink"
                //x="0px"
                //y="0px"
                //viewBox="0 0 66 66"
                //style="enable-background:new 0 0 66 66;"
                //xml:space="preserve"
            >

                <G>
                    <G>
                        <Polygon fill={fill}
                                 points="104.987,48.7 71.605,48.7 71.605,60.862 81.443,60.862 81.443,100 95.148,100 95.148,60.862 104.987,60.862"
                        />
                        <Polygon fill={fill}
                                 points="29.444,11.574 29.444,0.02 0,0.02 0,0.02 0,54.568 13.706,54.568 13.706,35.557 28.541,35.557 28.541,24.004 13.706,24.004 13.706,11.574"
                        />
                        <Polygon fill={fill}
                                 points="122.683,20.559 122.683,0.02 108.978,0.02 108.978,32.113 136,32.113 136,20.559"
                        />
                        <Polygon fill={fill}
                                 points="136,52.056 136,40.502 108.94,40.498 108.94,40.502 108.94,52.056 108.94,100 108.978,100 136,100 136,88.446 122.645,88.446 122.645,75.505 135.096,75.505 135.096,63.952 122.645,63.952 122.645,52.056"
                        />
                        <Polygon fill={fill}
                                 points="91.428,28.949 91.428,0.02 77.723,0.02 77.723,40.502 104.987,40.502 104.987,28.949"
                        />
                        <Path fill={fill}
                              d="M59.281,0v30.795c-0.004,1.447-0.13,2.629-0.38,3.543c-0.254,0.929-0.815,1.678-1.682,2.249 c-0.867,0.57-2.147,0.855-3.839,0.855c-1.776,0-3.088-0.242-3.934-0.728c-0.847-0.485-1.407-1.182-1.681-2.09 c-0.273-0.899-0.409-2.14-0.412-3.723V0H33.649v31.915c0,5.87,1.66,10.135,4.981,12.795c3.32,2.66,8.237,3.99,14.751,3.99 c6.218,0,11.04-1.34,14.466-4.022c3.426-2.681,5.139-6.893,5.139-12.636V0H59.281z"
                        />
                        <Path fill={fill}
                              d="M33.923,100l-5.614-11.512c3.006-2.689,4.676-6.595,4.676-11.602 c0-10.242-5.244-15.336-16.398-15.336H0V100h12.704v-7.221h2.156c0.859,0,1.69-0.038,2.499-0.104l3.08,7.326H33.923z M12.704,82.685l0-11.053h3.717c3.553,0,4.816,2.661,4.816,5.254c0,2.756-0.755,5.799-4.308,5.799H12.704z"
                        />
                    </G>
                    <Path fill={fill}
                          d="M62.991,55.961H45.488L32.023,99.988L45.598,100l1.943-7.157H61.42L63.456,100l13.575-0.012 L62.991,55.961z M58.529,82.685h-8.231l0.011-0.041h-0.295l4.307-15.874l4.513,15.874h-0.317L58.529,82.685z"
                    />
                </G>
            </Svg>
        );
    }
}