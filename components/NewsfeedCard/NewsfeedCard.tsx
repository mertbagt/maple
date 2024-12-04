import { BillCardTitle, TestimonyCardTitle } from "components/Card"
import { Timestamp } from "firebase/firestore"
import { Card as MapleCard } from "../Card/Card"
import { BillCardBody, TestimonyCardBody } from "./NewsfeedCardBody"

export const NewsfeedBillCard = (props: {
  court: string
  header: string
  subheader: string
  timestamp: Timestamp
  headerImgSrc: string
  headerImgTitle?: string
  bodyImgSrc: string
  bodyImgAltTxt: string
  bodyText: string
  isBillMatch: boolean
}) => {
  const date = props.timestamp.toDate()
  const formattedTimestamp = `${date.toLocaleDateString()}`
  const header = (
    <BillCardTitle
      court={props.court}
      header={props.header}
      subheader={props.subheader}
      timestamp={formattedTimestamp}
      imgSrc={props.headerImgSrc}
      imgTitle={props.headerImgTitle ?? ""}
      isBillMatch={props.isBillMatch}
    />
  )

  const body = (
    <BillCardBody
      imgSrc={props.bodyImgSrc}
      imgAltTxt={props.bodyImgAltTxt}
      text={props.bodyText}
      timestamp={formattedTimestamp}
    />
  )

  return <MapleCard headerElement={header} body={body} />
}

export const NewsfeedTestimonyCard = (props: {
  header: string
  subheader: string
  timestamp: Timestamp
  headerImgSrc: string
  headerImgTitle?: string
  bodyImgSrc: string
  bodyImgAltTxt: string
  bodyText: string
}) => {
  const date = props.timestamp.toDate()
  const formattedTimestamp = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`
  const header = (
    <TestimonyCardTitle
      header={props.header}
      subheader={props.subheader}
      timestamp={formattedTimestamp}
      imgSrc={props.headerImgSrc}
      imgTitle={props.headerImgTitle ?? ""}
    />
  )

  const body = (
    <TestimonyCardBody
      imgSrc={props.bodyImgSrc}
      imgAltTxt={props.bodyImgAltTxt}
      text={props.bodyText}
    />
  )

  return <MapleCard headerElement={header} body={body} />
}
