import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import phoneImg from "../assets/phone.jfif";
import laptop from "../assets/laptop.jfif"
import watch from "../assets/watch.jfif"
import headphone from "../assets/headphone.jfif"
const products = [
  { id: 1, name: "Smartphone", price: "$699", image: phoneImg },
  { id: 2, name: "Laptop", price: "$999", image: laptop },
  { id: 3, name: "Smartwatch", price: "$299", image: watch },
  { id: 4, name: "Headphones", price: "$199", image: headphone },

];

const ShopNow = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shop Now
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia component="img" height="200" image={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1">{product.price}</Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShopNow;
