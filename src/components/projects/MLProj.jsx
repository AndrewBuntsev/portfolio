import React from 'react'

class MLProj extends React.Component {
  render() {
    return (
      <div className='zoom-gallery phoenix-zoom-gallery'>
        <h3 id='top'>Project Description</h3>
        <p>
          The thermostat internal state is synchronized with the AWS IoT Core. The synchronization is implemented using
          the MQTT protocol that provides subscriber/publisher interaction between IoT state (topic) and all other componets of the system.
        </p>

        <p>
          <img
            src={require('./img/ML/top-level-plot.png')}
            alt='Top Level Architecture'
            style={{ margin: 'auto', display: 'block', border: '1px transparent solid', borderRadius: '7px', width: '80%' }}
          />
        </p>

        <p>
          The thermostat (hub) itself represents the complex system of hardware, firmware & software. Thermostat is equipped with variety of sensors to provide
          telemetry data for temperature, humidity, movement, light level, air quality, noise, presence, proximity.
          The telemetry data are published to the MQTT topic so trigger the Lambda-function that records all the data to DynamoDB.
          The historical data can be represented as the charts on the dashboard website with filtering by time range, sensor type and other parameters.
        </p>

        <p>
          <img
            src={require('./img/ML/charts.png')}
            alt='Top Level Architecture'
            style={{ margin: 'auto', display: 'block', border: '1px transparent solid', borderRadius: '7px', width: '80%' }}
          />
        </p>

        <h3>My Role in the project</h3>
        <p>
          - AWS engineering, design and programming including (but not limited by) the following services:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;- IoT Core (MQTT) is used as a main telemetry and state management system;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;- Lambda & API Gateway are used as REST API;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;- DynamoDB is a data base;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;- Cognito is used for managing user pool and for OAuth2 authentication;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;- CloudFront for hosting static internal website;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;- S3, Route53, IAM, SNS, CertificateManager, CloudWatch, …;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;- Serverless deployment.<br />
              - Web development (device dashboard), technologies used: Aurelia, TypeScript, D3, IoT, Cognito, gulp.<br />
              - Thermostat hub GUI development, technologies used: JavaScript, TypeScript, D3.<br />
              - Integration with Alexa & Google Assistant.
        </p>
      </div>
    )
  }
}

export default MLProj
