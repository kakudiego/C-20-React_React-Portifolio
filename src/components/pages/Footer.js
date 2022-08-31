import React from 'react';

import { Box, Container, Row, Column, FooterLink } from './FooterStyles';

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <FooterLink href='https://github.com/kakudiego' target="_blank" rel="noreferrer noopener">
              <i className=''>
                <span style={{ marginLeft: '10px' }}>GitHub</span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href='https://github.com/kakudiego' target="_blank" rel="noreferrer noopener">
              <i className=''>
                <span style={{ marginLeft: '10px' }}>LinkedIn</span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href='https://twitter.com/kakudiego' target="_blank" rel="noreferrer noopener">
              <i className=''>
                <span style={{ marginLeft: '10px' }}>Twitter</span>
              </i>
            </FooterLink>
          </Column>
          {/* <Column>
            <FooterLink href='https://www.instagram.com/kakudiego' target="_blank" rel="noreferrer noopener">
              <i className=''>
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              </i>
            </FooterLink>
          </Column> */}
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
