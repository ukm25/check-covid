import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Data = (props) => {
  const {dataNewest} = props;
    return (
        <>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card style={{ borderLeft: "solid", borderLeftColor: "#FF0000" }}>
                <CardContent>
                  <Typography variant="body2">Số ca nhiễm</Typography>
                  <Typography variant="body2">{dataNewest.Confirmed}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={{ borderLeft: "solid", borderLeftColor: "#00FF00" }}>
                <CardContent>
                  <Typography variant="body2">Số ca khỏi</Typography>
                  <Typography variant="body2">{dataNewest.Active}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={{ borderLeft: "solid", borderLeftColor: "#808080" }}>
                <CardContent>
                  <Typography variant="body2">Số ca tử vong</Typography>
                  <Typography variant="body2">{dataNewest.Deaths}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      );
  
};

export default Data;
