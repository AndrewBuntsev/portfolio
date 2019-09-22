import React from 'react';
import { TextField, Grid } from '@material-ui/core';

// https://material-ui.com/components/text-fields/

type Props = {};
type State = {};

class Contact<Props, State> extends React.Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    //Header
    const header = (
      <header>
        <h1
          style={{
            fontFamily: 'sans-serif',
            textAlign: 'center',
            marginTop: '50px',
            lineHeight: '1.3'
          }}
        >
          COME AND SAY HI OR JUST DROP A LINE
        </h1>
      </header>
    );

    //Contacts section
    const contacts = (
      <Grid item xs={12} md={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{ margin: '10px 0 0 0' }}>
            <span className="mailTo">
              <span className="fa fa-envelope" />
              <a href="mailto:andrew.buntsev@gmail.com">E-mail</a>
            </span>
            <p className="contactsLabel">andrew.buntsev@gmail.com</p>
          </Grid>
          <Grid item xs={12} style={{ margin: '10px 0 0 0' }}>
            <span className="address">
              <span className="fa fa-map-marker" />
              <span className="addressLabel">Address</span>
            </span>
            <p className="contactsLabel">Sydney, Australia</p>
          </Grid>
          <Grid item xs={12} style={{ margin: '10px 0 0 0' }}>
            <span className="mailTo">
              <div className="fa fa-skype" />
              <a href="skype:andy.cracer">Skype</a>
            </span>
            <p className="contactsLabel">andy.cracer</p>
          </Grid>
        </Grid>
      </Grid>
    );

    return (
      <div>
        {header}

        <Grid container spacing={3}>
          {contacts}

          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={6}
                style={{ paddingTop: 0, paddingBottom: 0 }}
              >
                <TextField
                  id="contactFormName"
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  className="contactFormInput"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                style={{ paddingTop: 0, paddingBottom: 0 }}
              >
                <TextField
                  id="contactFormEmail"
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  className="contactFormInput"
                />
              </Grid>
              <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
                <TextField
                  id="contactFormSubject"
                  label="Subject"
                  margin="normal"
                  variant="outlined"
                  className="contactFormInput"
                />
              </Grid>
              <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
                <TextField
                  id="contactFormMessage"
                  label="Message"
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows="6"
                  className="contactFormInput"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Contact;
