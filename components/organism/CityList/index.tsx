import React from 'react';
import styled from 'styled-components';
import { Grid, Segment } from 'semantic-ui-react';
import { CityCard } from '@/components/CityCard';
const CityWrapper = styled.div`
max-width:1500px;
width:100%;
margin:0 auto;

.ui.segment{
    border:none;
    box-shadow:none;
}
.ui.card>.extra, .ui.cards>.card>.extra {
min-height:fit-content !important;
 }
 .ui.grid {
     margin:0 !important;
 }

`;
const TitleBox = styled.div`
text-align:center;
font-size:45px;
margin-bottom:30px;
font-weight:bold;
color: rgba(207,67,40,1);
@media (max-width: 850px){
    font-size:28px;
}
`;

const CityList = () => {
    const cityInformation = []
    return (
        <CityWrapper>
            <TitleBox>Explore By Cities</TitleBox>
            <Grid stackable columns={2} divided={false} padded={false}>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment>
                            <CityCard height={500} image="/1.JPG" name="Kathmandu" code="kat" />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment><CityCard height={220} image="/2.jpg" name="Pokhara" code="pok" /></Segment>
                        <Segment><CityCard height={220} image="/3.jpg" name="Bhaktapur" code="bha" /></Segment>
                    </Grid.Column>
                   
                </Grid.Row>
            </Grid>
        </CityWrapper>
    )

}

export { CityList }
