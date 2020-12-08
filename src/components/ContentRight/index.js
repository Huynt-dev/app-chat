import React from "react";

import {Wrapper, Khoixauxi, Chat, Text, Time} from './style';

export default function ContentRight(){
    return(
            <Khoixauxi>
                <Wrapper>
                    <Chat>
                        <Text>rtesfasfjasklj</Text>
                        <Time>10</Time>
                    </Chat>
                </Wrapper>

                <Wrapper friend>
                    <Chat>
                        <Text>rtesfasfjasklj</Text>
                        <Time>10</Time>
                    </Chat>
                </Wrapper>
                
                <Wrapper>
                    <Chat>
                        <Text>rtesfasfjasasdasdasdasdklj</Text>
                        <Time>10:20</Time>
                    </Chat>
                </Wrapper>

            </Khoixauxi>
    )
}