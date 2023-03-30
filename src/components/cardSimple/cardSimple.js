import {Card, Button} from "react-bootstrap";
import "./cardSimple.css";

const CardSimple = ({imgSrc, title, description, buttonLabel, buttonOnClick}) => {
    return (
        <Card style={{width: '320px'}}>
            <Card.Img variant="top" src={imgSrc} classssName="image-card-simple"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" onClick={buttonOnClick}>{buttonLabel}</Button>
            </Card.Body>

        </Card>
    )
}

export default CardSimple;