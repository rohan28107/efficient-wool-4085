import React from "react";
import { Box, Button, Flex, Square } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const CartAmountToggle = ({amount, setDecrease, setIncrease }) => {
    return <Flex className="cart-button">
                <Box>
                    <Button onClick={() => setDecrease()}>
                        <MinusIcon />
                    </Button>
                </Box>
                <Square size='40px'>{amount}</Square>
                <Box>
                    <Button onClick={() => setIncrease()}>
                        <AddIcon />
                    </Button>
                </Box>
    </Flex>
}

export default CartAmountToggle;