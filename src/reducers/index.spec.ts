import { setData } from '../actions'
import { LinkType } from '../constants/enums'
import {
  reducer,
  selectors,
} from '.'

describe('Reducer', () => {
  it('should dispatch to set data', () => {
    const mockData = {
      profile: undefined,
      theme: undefined,
      links: undefined,
    }
    const mockInitialState = {
      data: undefined,
    }

    expect(reducer(mockInitialState, setData(mockData)))
      .toEqual({
        ...mockInitialState,
        data: mockData,
      })
  })
})

describe('Selector: data', () => {
  it('should receive data', () => {
    const mockData = {
      profile: {
        name: 'mock-name',
      },
      theme: undefined,
      links: undefined,
    }
    const mockInitialState = {
      data: mockData,
    }
    const data = selectors.data(mockInitialState)

    expect(data).toEqual(mockData)
  })
})

describe('Selector: profile', () => {
  it('should receive profile', () => {
    const mockData = {
      profile: {
        name: 'mock-name',
      },
      theme: undefined,
      links: undefined,
    }
    const mockInitialState = {
      data: mockData,
    }
    const profile = selectors.profile(mockInitialState)

    expect(profile).toEqual(mockData.profile)
  })
})

describe('Selector: theme', () => {
  it('should receive theme', () => {
    const mockData = {
      profile: undefined,
      theme: {
        colours: {
          primary: '#39E09B',
          secondary: '#455A64',
        },
      },
      links: undefined,
    }
    const mockInitialState = {
      data: mockData,
    }
    const theme = selectors.theme(mockInitialState)

    expect(theme).toEqual(mockData.theme)
  })
})

describe('Selector: links', () => {
  it('should receive links', () => {
    const mockData = {
      profile: undefined,
      theme: undefined,
      links: [
        {
          type: LinkType.Classic,
          text: 'mock-text',
          href: 'mock-link',
          platforms: [],
          shows: [],
        },
      ],
    }
    const mockInitialState = {
      data: mockData,
    }
    const links = selectors.links(mockInitialState)

    expect(links).toEqual(mockData.links)
  })
})
