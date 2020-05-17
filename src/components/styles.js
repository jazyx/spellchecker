
import styled from 'styled-components'

const fontSize = "7vmin"
const fontFamily = "'DejaVu serif', Cambria, serif"

export const StyledDiv = styled.div`
  position: relative;
  background-color: #fee;
  text-align: left;
`


export const StyledTextArea = styled.textarea`
  font-size: ${fontSize};
  width: 100vw;
  box-sizing: border-box;
`


export const StyledPhrase = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${fontSize};
  font-family: ${fontFamily};
  pointer-events: none;

  & span.cloze {
    ${props => props.width
             ?  `width: ${props.width}px;
                `
             : ""}
  }
`


export const StyledInput = styled.input.attrs(props => ({
  type: "text"
}))`
  font-size: ${fontSize};
  font-family: ${fontFamily};
  width: ${props => props.width}px;
  margin: 0;
  padding: 0;
  border: none;
  pointer-events: auto;
  background-color: ${props => props.error
                             ? "#fee"
                             : props.correct
                               ? "#dfd"
                               : "#ddf"
                     };
`


export const StyledFeedback = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  font-family: ${fontFamily};
  white-space: pre;

  /* Let input element behind show its cursor and receive mouse and
   * touch events
   */
  background: transparent;
  pointer-events: none;

  /* vertical-align counteracts baseline effect of overflow: hidden
   * See the last line here:
   * https://www.w3.org/TR/CSS2/visudet.html#leading
   */
  vertical-align: top;
  overflow: hidden;

  /* WidthHolder has hidden: true, but FeedBack does not */
  ${props => props.hidden
           ? `height: 0;
              position: absolute;
             `
           : ''
   }
`


export const StyledAdd = styled.span`
  display:inline-block;
  height:0.7em;
  box-shadow:0px 0 0 1px #f00;
  position:relative;

  &:after {
    content:"^";
    position:absolute;
    top:92%;
    left:50%;
    transform:translate(-50%);
    color:#f00;
    font-size:0.25em;
  }
`


export const StyledCut = styled.span`
  display:inline-block;
  color: #f00;
`


export const StyledFix = styled.span`
  display:inline-block;
  color: #f09;
`


export const StyledFlip = styled.span`
  display:inline-block;
  color: #f60;
`