import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TodoItem(item) {
    let color = "yellow";
    let style = {
        wordWrap: "break-word",
    };

    if (item.status) {
        color = "green";
        style["textDecorationLine"] = "line-through";
    }

    return (
        <Card key={item._id} color={color} fluid>
            <CardHeader title={item.task} />
        </Card >
    );
}