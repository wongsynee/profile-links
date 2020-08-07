import React from 'react'
import moment from 'moment'

import List from '../../elements/List'
import Chevron from '../../elements/Chevron'
import {
  Link,
  Block,
  TextWrapper,
  Date,
  Venue,
  DisclaimerText,
} from './LinkShows.style'

interface IMusicListProps {
  shows: {
    date: string;
    venue: string;
    href?: string;
  }[];
}

const ShowsList = ({
  shows,
}: IMusicListProps) => {
  return (
    <List>
      {
        shows.map((show, index) => {
          const { date, venue, href } = show
          return (
            <li key={`${venue}-${index}`}>
              {href ? (
                <Link href={href} target="_blank">
                  <TextWrapper>
                    <Date>
                      {moment(date, 'DD-MM-YYYY').format('MMM DD YYYY')}
                    </Date>
                    <Venue>
                      {venue}
                    </Venue>
                  </TextWrapper>
                  <Chevron />
                </Link>
              ) : (
                <Block>
                  <TextWrapper>
                    <Date>
                      {moment(date, 'DD-MM-YYYY').format('MMM DD YYYY')}
                    </Date>
                    <Venue>
                      {venue}
                    </Venue>
                  </TextWrapper>
                  <DisclaimerText>Sold out</DisclaimerText>
                </Block>
              )}
            </li>
          )
        })
      }
    </List>
  )
}

export default ShowsList