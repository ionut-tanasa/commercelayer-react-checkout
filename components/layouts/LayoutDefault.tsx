import { ArrowLeftIcon } from "@heroicons/react/outline"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import { Button } from "../ui/Button"

import { Base } from "components/ui/Base"
import { Card } from "components/ui/Card"
import { Container } from "components/ui/Container"

interface Props {
  aside: ChildrenType
  main: ChildrenType
}

export const LayoutDefault: React.FC<Props> = ({ main, aside }) => {
  const { t } = useTranslation()
  const handleClick = () => {
    document.location.href = process.env.NEXT_PUBLIC_SHOP_URL as string
  }

  return (
    <Base>
      <Container>
        <WrapperButton>
          <Button
            data-test-id="button-back-to-shop"
            onClick={handleClick}
            className="bg-indigo-700"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-5 text-xs" />
            {t("general.back")}
          </Button>

          {""}
        </WrapperButton>

        <Wrapper>
          <Aside>{aside}</Aside>
          <Main>
            <Card fullHeight>{main}</Card>
          </Main>
        </Wrapper>
      </Container>
    </Base>
  )
}

const Wrapper = styled.div`
  ${tw`flex flex-wrap justify-end items-stretch flex-col min-h-full md:h-screen md:flex-row`}
`

const Main = styled.div`
  ${tw`flex-none md:flex-1 justify-center order-first md:order-last`}
`

const Aside = styled.div`
  ${tw`flex-none md:flex-1`}
`

export const WrapperButton = styled.div`
  ${tw`flex items-center justify-start lg:pl-20 lg:pr-10 lg:pt-10 xl:pl-48`}
`
