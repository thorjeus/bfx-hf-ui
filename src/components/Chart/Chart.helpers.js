import prepareAmount from '../../util/precision/prepare_amount'
import preparePrice from '../../util/precision/prepare_price'

/**
 * Generates a basic info label (i.e. for tooltips) for the provided strat trade
 *
 * @param {Object} stratTrade
 * @param {Object} stratTrade.trade - actual hf trade model
 * @param {Object} stratTrade.order - executed order model
 * @return {string} label
 */
export const labelForStrategyTradeAnnotation = ({ label, amount, price } = {}) => [
  `${amount > 0 ? 'Buy' : 'Sell'}`,
  `${prepareAmount(amount)} @ ${preparePrice(price)}`,
  label
].join(' ')
