import connect from '../../utils/connect.js'
import { mergeOptions } from '../../utils/wx.js'
import carousel from '../../components/carousel/carousel.js'

const page = mergeOptions({
  onLoad (options) {
    this.queryWeather()
  },
}, carousel)

const mapState = ({home: state, loading}) => {
  return {
    ...state,
    loading,
  }
}

const mapFunc = (dispatch) => {
  return {
    queryWeather () {
      dispatch({type: 'home/queryWeather'})
    },

    queryLocation () {
      dispatch({type: 'app/getLocation'})
    },

    onTapCarouselItem (e) {
      dispatch({
        type: 'home/onTapCarousel',
        payload: {pic: e.currentTarget.dataset.pic}
      })
    },

  }
}

Page(connect(mapState, mapFunc)(page))
