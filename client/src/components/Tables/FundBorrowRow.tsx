import { Loan } from 'src/types'
import {
  Avatar,
  AvatarGroup,
  Flex,
  Icon,
  Progress,
  GridItem,
  Text,
  Tr,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import numeral from 'numeral'
import dayjs from 'dayjs'
import { LoanStatus } from 'src/generated_server'
import { getShortenedWalletAddress } from 'src/utils'

interface LoanRow {
  loan: Loan
  key: string
  setLoanData: (loan: Loan) => void
  selected?: boolean
}

//dee:todo // what is status here
const status = 'unknown'

const getStatusColorAndCopy = (state: LoanStatus): string[] => {
  switch (state) {
    case 'state_created':
      return ['Pending', 'yellow.400']
    case 'state_bobFunded':
      return ['Funded', 'yellow.400']
    case 'state_movedToEscrow':
      return ['Active', 'yellow.400']
    case 'state_refundToBob':
      return ['Repaid', 'green.300']
    case 'state_returned':
      return ['Repaid', 'green.300']
    case 'state_released':
      return ['Lender Deposit Returned', 'green.300']
    case 'state_refundToAlex':
      return ['Collateral Returned', 'green.300']

    case 'state_defaulted':
      return ['Defaulted', 'red.400']
    case 'state_fortified':
      return ['Lender Defaulted', 'red.400']
  }
}

const geGridItemueDateText = (loan: Loan) => {
  if (loan.loanStatus === 'state_created') {
    return '---'
  } else {
    const nowTime = dayjs()
    const dueTime = dayjs(loan.loanDuration)
    const dayDiff = dueTime.diff(nowTime, 'days')
    if (dayDiff > 0) {
      return `${dayDiff} Day${dayDiff > 1 ? 's' : ''}`
    }
    const hourDiff = dueTime.diff(dueTime, 'hours')
    if (hourDiff > 0) {
      return `${hourDiff} Hour${hourDiff > 1 ? 's' : ''}`
    }
    const minuteDiff = dueTime.diff(dueTime, 'minutes')
    if (minuteDiff > 0) {
      return `${minuteDiff} Minute${minuteDiff > 1 ? 's' : ''}`
    }
    return 'EXPIRED'
  }
}

export const FundBorrowRow = ({ loan, setLoanData, selected }: LoanRow) => {
  const {
    id,
    requesterTzAddress,
    erCaddress,
    loanAmount,
    interestAmount,
    loanStatus,
  } = loan
  const textColor = useColorModeValue('gray.700', 'white')
  const [statusText, statusColor] = getStatusColorAndCopy(loanStatus)
  const dueDateText = geGridItemueDateText(loan).split(' ')
  const [hovered, setHovered] = useState(false)
  console.log(selected, 'selected')
  return (
    <>
      <GridItem
        py="10px"
        borderBottom={'solid 1px'}
        borderBottomColor="gray.100"
        _hover={{
          cursor: 'pointer',
        }}
        onMouseEnter={() => {
          setHovered(true)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
        onClick={() => {
          setLoanData(loan)
        }}
        bg={selected || hovered ? 'aquamarine.100' : undefined}
      >
        <Flex flexDirection="column">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
            my="0px"
          >
            Loan ID: {getShortenedWalletAddress(id)}
          </Text>
          <Text
            my="0px"
            fontSize="md"
            color={'gray.400'}
            fontWeight="bold"
            minWidth="100%"
          >
            By: {getShortenedWalletAddress(requesterTzAddress)}
          </Text>
        </Flex>
      </GridItem>
      <GridItem
        py="10px"
        borderBottom={'solid 1px'}
        borderBottomColor="gray.100"
        _hover={{
          cursor: 'pointer',
        }}
        onMouseEnter={() => {
          setHovered(true)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
        onClick={() => {
          setLoanData(loan)
        }}
        bg={selected || hovered ? 'aquamarine.100' : undefined}
      >
        <Flex flexDirection="column">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
            my="0px"
          >
            {getShortenedWalletAddress(erCaddress)}
          </Text>
          {/* <Text
            my="0px"
            fontSize="md"
            color={'gray.400'}
            fontWeight="bold"
            minWidth="100%"
          >
            {collectionName}
          </Text> */}
        </Flex>
      </GridItem>
      <GridItem
        py="10px"
        borderBottom={'solid 1px'}
        borderBottomColor="gray.100"
        _hover={{
          cursor: 'pointer',
        }}
        onMouseEnter={() => {
          setHovered(true)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
        onClick={() => {
          setLoanData(loan)
        }}
        bg={selected || hovered ? 'aquamarine.100' : undefined}
      >
        <Flex flexDirection="column">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
            my="0px"
          >
            {numeral(loanAmount).format('0,0')}
          </Text>
          <Text
            my="0px"
            fontSize="md"
            color={'gray.400'}
            fontWeight="bold"
            minWidth="100%"
          >
            XTZ
          </Text>
        </Flex>
      </GridItem>
      <GridItem
        py="10px"
        borderBottom={'solid 1px'}
        borderBottomColor="gray.100"
        _hover={{
          cursor: 'pointer',
        }}
        onMouseEnter={() => {
          setHovered(true)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
        onClick={() => {
          setLoanData(loan)
        }}
        bg={selected || hovered ? 'aquamarine.100' : undefined}
      >
        <Flex flexDirection="column">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
            my="0px"
          >
            {numeral(interestAmount).format('0.00')}
          </Text>
          <Text
            my="0px"
            fontSize="md"
            color={'gray.400'}
            fontWeight="bold"
            minWidth="100%"
          >
            APR
          </Text>
        </Flex>
      </GridItem>

      <GridItem
        py="10px"
        borderBottom={'solid 1px'}
        borderBottomColor="gray.100"
        _hover={{
          cursor: 'pointer',
        }}
        onMouseEnter={() => {
          setHovered(true)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
        onClick={() => {
          setLoanData(loan)
        }}
        bg={selected || hovered ? 'aquamarine.100' : undefined}
      >
        <Text color={statusColor} fontWeight={700}>
          {statusText}
        </Text>
      </GridItem>
      <GridItem
        py="10px"
        borderBottom={'solid 1px'}
        borderBottomColor="gray.100"
        _hover={{
          cursor: 'pointer',
        }}
        onMouseEnter={() => {
          setHovered(true)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
        onClick={() => {
          setLoanData(loan)
        }}
        bg={selected || hovered ? 'aquamarine.100' : undefined}
      >
        <Flex flexDirection="column">
          {dueDateText.length > 1 ? (
            <>
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
                my="0px"
              >
                {dueDateText[0]}
              </Text>

              <Text
                my="0px"
                fontSize="md"
                color={'gray.400'}
                fontWeight="bold"
                minWidth="100%"
              >
                {dueDateText[1]}
              </Text>
            </>
          ) : (
            <Text
              my="0px"
              fontSize="md"
              color={'gray.400'}
              fontWeight="bold"
              minWidth="100%"
            >
              {dueDateText}
            </Text>
          )}
        </Flex>
      </GridItem>
    </>
  )
}
