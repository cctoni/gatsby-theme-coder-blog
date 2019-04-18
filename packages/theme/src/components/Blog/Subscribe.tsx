import React from 'react'
import styled, { css } from 'styled-components'

// Local
import EmailField from '../shared/EmailField'
import FeatureTitle from '../shared/Feature/Title'
import { Space } from '../shared/Space'
import Container from '../shared/Container'
import Button from '../shared/Button'
import { mobile } from '../../utils/styles/media'
import NewsletterForm from '../shared/Footer/NewsletterForm'

const primaryLight4 = (p: any) => p.theme.primaryLight4
// [TODO]: remove { ref?: never } when migrating to styled-components@4
const Subscribe = (props: React.HTMLProps<HTMLElement> & { ref?: never }) => (
  <Wrapper {...props}>
    <Container>
      <Title color="dark">Don’t miss the next post!</Title>
      <Space height={12} heightOnMobile={0} />

      <Form>
        <HideOnMobile>
          <NewsletterForm>
            {props => <EmailField size="medium" submitText="Follow The Blog" bg={primaryLight4} {...props} />}
          </NewsletterForm>
        </HideOnMobile>

        <ShowOnMobile>
          <NewsletterForm>
            {props => (
              <>
                <EmailField size="small" submitButton={false} bg={primaryLight4} {...props} />
                <ButtonWrapper>
                  <Button type="primary" color="dark">
                    Follow The Blog
                  </Button>
                </ButtonWrapper>
              </>
            )}
          </NewsletterForm>
        </ShowOnMobile>
      </Form>
    </Container>
  </Wrapper>
)

export default Subscribe

// Styles
const Wrapper = styled.section`
  text-align: center;
  padding: 100px 0;

  ${mobile(css`
    text-align: left;
    padding: 40px 0;
  `)};
`

const Title = FeatureTitle.extend`
  margin: 0;
  margin-bottom: 32px;
  font-size: 28px;

  ${mobile(css`
    font-size: 20px;
    margin-bottom: 24px;
  `)};
`

const Form = styled.form`
  max-width: 620px;
  margin: 0 auto;
`

const HideOnMobile = styled.div`
  ${mobile(css`
    display: none;
  `)};
`

const ShowOnMobile = styled.div`
  display: none;
  ${mobile(css`
    display: block;
  `)};
`

const ButtonWrapper = styled.div`
  margin-top: 16px;
`
