import React, { useEffect, useState } from "react";
import unsplash from "../api/unsplash";
import "./ImageDetails.css";

const ImageDetails = () => {
  const [data, setData] = useState({});
  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    const getData = async () => {
      const response = await unsplash.get(`/photos/${id}`);
      setData(response.data);
    };

    getData();
  }, [id]);

  if (Object.keys(data).length !== 0) {
    console.log();
  }

  return (
    <div></div>
    // <Grid style={{ paddingTop: "50px" }} centered>
    //   <Grid.Column width={11}>
    //     <Header style={{ paddingBottom: "10px" }} as="h1">
    //       Image details
    //     </Header>
    //     {Object.keys(data).length !== 0 ? (
    //       <Segment raised>
    //         <Grid>
    //           <Grid.Row>
    //             <Grid.Column width={8}>
    //               <Image src={data.urls.full} rounded />
    //               <List horizontal>
    //                 <List.Item>
    //                   <div className="gray-text pt-10">
    //                     <Icon name="heart" color="gray" />
    //                     16
    //                   </div>
    //                 </List.Item>
    //                 <List.Item>
    //                   <div className="gray-text">
    //                     <Icon name="download" color="gray" />
    //                     3738
    //                   </div>
    //                 </List.Item>
    //               </List>
    //             </Grid.Column>
    //             <Grid.Column className="gray-text pt-20" width={8}>
    //               <List relaxed>
    //                 <Header as="h3">A man drinking coffee</Header>
    //                 <List.Item> publish date: 13 juli 2014</List.Item>
    //                 <List.Item>City: Montreal</List.Item>
    //                 <List.Item>
    //                   Country: <Flag name="canada" />
    //                 </List.Item>
    //                 <List.Item>Photographer: Joe Example</List.Item>
    //                 <List.Item>
    //                   Current Photographer Location: Montreal
    //                 </List.Item>
    //                 <List.Item>
    //                   portfolio_url: <a href="">https://example.com/</a>
    //                 </List.Item>
    //                 <List.Item>Total Collections: 4383</List.Item>
    //                 <List.Item>
    //                   <Label as="a" basic color="blue" pointing>
    //                     Man
    //                   </Label>
    //                   <Label as="a" basic color="blue" pointing>
    //                     Drinking
    //                   </Label>
    //                   <Label as="a" basic color="blue" pointing>
    //                     Coffee
    //                   </Label>
    //                 </List.Item>
    //               </List>
    //               <Button color="black" size="large" fluid>
    //                 <Icon name="arrow left" /> Back to list
    //               </Button>
    //             </Grid.Column>
    //           </Grid.Row>
    //         </Grid>
    //       </Segment>
    //     ) : (
    //       ""
    //     )}
    //   </Grid.Column>
    // </Grid>
  );
};

export default ImageDetails;
