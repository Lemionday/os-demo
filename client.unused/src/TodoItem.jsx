import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from "@material-ui/core/CardHeader";

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