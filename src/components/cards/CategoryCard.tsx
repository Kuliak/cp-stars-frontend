import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
  cardTitle: string;
  imagePath: any;
  navigatePath: string;
}

const CategoryCard = (props: CategoryCardProps) => {
  const cardMaxWidth = 180;

  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <Card sx={{ maxWidth: cardMaxWidth }}>
      <CardActionArea onClick={() => navigate(props.navigatePath)}>
        <CardMedia
          component="img"
          image={props.imagePath}
          alt={props.cardTitle}
        />
        <CardContent>
          <Typography
            variant="h6"
            component="div">
            {props.cardTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
