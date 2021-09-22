import LambdaCliente from 'aws-sdk/clients/lambda';

const config = {
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
}

const cliente = new LambdaCliente(config);

const invokeFunction = (data: any) => {
    const params = {
        FunctionName: 'sendEmailOrder',
        Payload: JSON.stringify(data)
    };

    return cliente.invoke(params).promise();
}

export default invokeFunction;