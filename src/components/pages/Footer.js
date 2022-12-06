import React from 'react';

import { Box, Container, Row, Column, FooterLink } from './FooterStyles';

const Footer = () => {
  return (
    <Box className="">
      <Container class="mt-auto">
        <Row>
          <Column>
            <FooterLink href='https://github.com/kakudiego' target="_blank" rel="noreferrer noopener">
              <span style={{ marginLeft: '10px' }}>GitHub</span>
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href='https://github.com/kakudiego' target="_blank" rel="noreferrer noopener">
              <span style={{ marginLeft: '10px' }}>LinkedIn</span>
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href='https://twitter.com/kakudiego' target="_blank" rel="noreferrer noopener">
              <span style={{ marginLeft: '10px' }}>Twitter</span>
            </FooterLink>
          </Column>
          {/* <Column>
            <FooterLink href='https://www.instagram.com/kakudiego' target="_blank" rel="noreferrer noopener">
                <span style={{ marginLeft: '10px' }}>Instagram</span>
            </FooterLink>
          </Column> */}
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
