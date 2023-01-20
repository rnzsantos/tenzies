import { nanoid } from "nanoid"

export default function Die(props) {
  const dieFace = [
    [<div className="dot center middle" key={nanoid()}></div>],
    [
      <div className="dot top right" key={nanoid()}></div>,
      <div className="dot bottom left" key={nanoid()}></div>,
    ],
    [
      <div className="dot top right" key={nanoid()}></div>,
      <div className="dot middle center" key={nanoid()}></div>,
      <div className="dot bottom left" key={nanoid()}></div>,
    ],
    [
      <div className="dot top left" key={nanoid()}></div>,
      <div className="dot top right" key={nanoid()}></div>,
      <div className="dot bottom left" key={nanoid()}></div>,
      <div className="dot bottom right" key={nanoid()}></div>,
    ],
    [
      <div className="dot top left" key={nanoid()}></div>,
      <div className="dot top right" key={nanoid()}></div>,
      <div className="dot middle center" key={nanoid()}></div>,
      <div className="dot bottom left" key={nanoid()}></div>,
      <div className="dot bottom right" key={nanoid()}></div>,
    ],
    [
      <div className="dot top left" key={nanoid()}></div>,
      <div className="dot top right" key={nanoid()}></div>,
      <div className="dot center left" key={nanoid()}></div>,
      <div className="dot center right" key={nanoid()}></div>,
      <div className="dot bottom left" key={nanoid()}></div>,
      <div className="dot bottom right" key={nanoid()}></div>,
    ],
  ]

  return (
    <div
      className={`die ${props.isHold && "die--hold"}`}
      onClick={e => props.handleDieClick(e, props.id)}>
      {dieFace[props.value - 1]}
    </div>
  )
}
