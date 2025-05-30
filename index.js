import tkit from "terminal-kit"

const SCRN_W = 35
const SCRN_H = 22

const term = tkit.terminal
// const blankLine = " ".repeat(SCRN_W) + "\n"
// // filledArray(22, () => term.bgGray(blankLine))

// // term.bgGray(blankScreen)
// term.bgGray("foo")
// term
// term.bgGray("bar")

const layout = `
^#^K ^#^b CHA ^#^K  ^#^b PAT ^#^K  ^#^b BAR ^#^K  ^#^b     ^#^K  ^#^m  ☰  ^#^K ^:
^#^K ^#^b   1 ^#^K  ^#^b   1 ^#^K  ^#^b   1 ^#^K  ^#^b     ^#^K  ^#^m SEQ ^#^K ^:
^#^K                                   ^:
^#^K ^#^g C♯  ^#^K  ^#^g C♯  ^#^K  ^#^g C♯  ^#^K  ^#^g C♯  ^#^K  ^#^c     ^#^K ^:
^#^K ^#^g   0 ^#^K  ^#^g   0 ^#^K  ^#^g   0 ^#^K  ^#^g   0 ^#^K  ^#^c     ^#^K ^:
^#^K                                   ^:
^#^K ^#^g C♯  ^#^K  ^#^g C♯  ^#^K  ^#^g C♯  ^#^K  ^#^g C♯  ^#^K  ^#^c     ^#^K ^:
^#^K ^#^g   0 ^#^K  ^#^g   0 ^#^K  ^#^g   0 ^#^K  ^#^g   0 ^#^K  ^#^c     ^#^K ^:
^#^K                                   ^:
^#^K ^#^g C♯  ^#^K  ^#^g C♯  ^#^K  ^#^g C♯  ^#^K  ^#^g C♯  ^#^K  ^#^c     ^#^K ^:
^#^K ^#^g   0 ^#^K  ^#^g   0 ^#^K  ^#^g   0 ^#^K  ^#^g   0 ^#^K  ^#^c     ^#^K ^:
^#^K                                   ^:
^#^K ^#^g C♯  ^#^K  ^#^g C♯  ^#^K  ^#^g C♯  ^#^K  ^#^g C♯  ^#^K  ^#^c     ^#^K ^:
^#^K ^#^g   0 ^#^K  ^#^g   0 ^#^K  ^#^g   0 ^#^K  ^#^g   0 ^#^K  ^#^c     ^#^K ^:
^#^K                                   ^:
^#^K ^#^w     ^#^K  ^#^w OCT ^#^K  ^#^w     ^#^K  ^: RST ^#^K  ^#^m  ☰  ^#^K ^:
^#^K ^#^w   ← ^#^K  ^#^w   0 ^#^K  ^#^w   → ^#^K  ^: --- ^#^K  ^#^m KBD ^#^K ^:
^#^K                                   ^:
^#^w  ^:     ^#^w ^:     ^#^w^k  ▏ ^:     ^#^w ^:     ^#^w ^:     ^#^w ^:
^#^w  ^:  C♯ ^#^w ^:  D♯ ^#^w^k  ▏ ^: F♯  ^#^w ^: G#  ^#^w ^: A♯  ^#^w ^:
^#^w^k     ▏    ▏    ▏    ▏    ▏    ▏    ^:
^#^w^k  C  ▏ D  ▏ E  ▏ F  ▏ G  ▏ A  ▏ B  ^:
`

const scr = layout
// .split("\n")
// .map(
//   (s, ix) =>
//     `${ix % 10} ${s || filledArray(SCRN_W, (ix) => (ix + 1) % 10).join("")}`
// )
// .join("\n")

term(scr)

// const rows = filledArray(10, (y) => filledArray(16, (x) => `[]`))

// term.table(rows, {
//   hasBorder: false,
//   contentHasMarkup: true,
//   textAttr: { bgColor: "default" },
//   // firstCellTextAttr: { bgColor: "blue" },
//   // firstRowTextAttr: { bgColor: "yellow" },
//   // firstColumnTextAttr: { bgColor: "red" },
//   checkerEvenCellTextAttr: { bgColor: "gray" },
//   width: 32,
// })

term.grabInput({ mouse: "button" })

term.on("mouse", (name, data) => {
  console.log("'mouse' event:", name, data)
})

term.on("key", function (key, matches, data) {
  switch (key) {
    // case 'UP' : term.up( 1 ) ; break ;
    // case 'DOWN' : term.down( 1 ) ; break ;
    // case 'LEFT' : term.left( 1 ) ; break ;
    // case 'RIGHT' : term.right( 1 ) ; break ;
    case "CTRL_C":
      process.exit()
      break
    default:
      // Echo anything else
      term.noFormat(
        Buffer.isBuffer(data.code) ? data.code : String.fromCharCode(data.code)
      )
      break
  }
})

function filledArray(len, cb) {
  return Array(len)
    .fill(null)
    .map((_, ix) => cb(ix))
}
