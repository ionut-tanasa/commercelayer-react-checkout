import { AddressInput } from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

import { FlexContainer } from "components/ui/FlexContainer"
import { CheckCss } from "components/ui/form/CheckBox"
import { Label } from "components/ui/Label"

interface Props {
  addressType: "billing" | "shipping"
}

export const AddressSectionSaveOnAddressBook: React.FC<Props> = ({
  addressType,
}) => {
  const { t } = useTranslation()

  const fieldName =
    addressType === "billing"
      ? "billing_address_save_to_customer_book"
      : "shipping_address_save_to_customer_book"
  const dataTestId =
    addressType === "billing"
      ? "billing_address_save_to_customer_address_book"
      : "shipping_address_save_to_customer_address_book"

  return (
    <FlexContainer className="items-center">
      <StyledAddressInput
        data-test-id={dataTestId}
        name={fieldName}
        id={fieldName}
        type="checkbox"
        required={false}
        className="form-checkbox"
      />
      <Label
        htmlFor={fieldName}
        dataTestId={dataTestId}
        textLabel={t("stepCustomer.saveAddressBook")}
      />
    </FlexContainer>
  )
}

const StyledAddressInput = styled(AddressInput)`
  ${CheckCss}
`
