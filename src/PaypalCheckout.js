import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaypalCheckout() {
    return (
        <PayPalScriptProvider options={{ "client-id": "AZCBfqn-sNB4weArO26X7XzTIF4kIJujwaG7150zOfOJE3tOOHYKczuChMIBvbHMN5BplRJ3pm5GO_zo" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "0.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
        </PayPalScriptProvider>
    );
}
