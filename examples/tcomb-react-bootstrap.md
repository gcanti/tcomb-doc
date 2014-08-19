# Accordion

Props:



# Affix

Props:

- `offset`: `maybe(Num)`
- `offsetTop`: `maybe(Num)`
- `offsetBottom`: `maybe(Num)`

# Alert

`Alert` is a `subtype` of `UncheckedAlert` such that: Properties onDismiss and dismissAfter must be both defined or both missing

# UncheckedAlert

Props:

- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `onDismiss`: `maybe(Func)`
- `dismissAfter`: `maybe(Num)`

# BsClass

Enums:

- `alert`: `"alert"`
- `button`: `"btn"`
- `button-group`: `"btn-group"`
- `button-toolbar`: `"btn-toolbar"`
- `column`: `"col"`
- `form`: `"form"`
- `glyphicon`: `"glyphicon"`
- `input-group`: `"input-group"`
- `label`: `"label"`
- `modal`: `"modal"`
- `nav`: `"nav"`
- `navbar`: `"navbar"`
- `panel`: `"panel"`
- `panel-group`: `"panel-group"`
- `progress-bar`: `"progress-bar"`
- `row`: `"row"`
- `well`: `"well"`

# BsStyle

Enums:

- `danger`: `"danger"`
- `default`: `"default"`
- `info`: `"info"`
- `inline`: `"inline"`
- `link`: `"link"`
- `pills`: `"pills"`
- `primary`: `"primary"`
- `success`: `"success"`
- `tabs`: `"tabs"`
- `warning`: `"warning"`

# Badge

Props:

- `pullRight`: `maybe(Bool)`

# Button

Props:

- `active`: `maybe(Bool)`
- `disabled`: `maybe(Bool)`
- `block`: `maybe(Bool)`
- `navItem`: `maybe(Bool)`
- `navDropdown`: `maybe(Bool)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# BsSize

Enums:

- `large`: `"lg"`
- `medium`: `"md"`
- `small`: `"sm"`
- `xsmall`: `"xs"`

# ButtonGroup

Props:

- `vertical`: `maybe(Bool)`
- `justified`: `maybe(Bool)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# ButtonToolbar

Props:

- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# Carousel

Props:

- `onSlideEnd`: `maybe(Func)`
- `slide`: `maybe(Bool)`
- `controls`: `maybe(Bool)`
- `pauseOnHover`: `maybe(Bool)`
- `wrap`: `maybe(Bool)`
- `onSelect`: `maybe(Func)`
- `indicators`: `maybe(Bool)`
- `activeIndex`: `maybe(Num)`
- `defaultActiveIndex`: `maybe(Num)`
- `direction`: `maybe(Direction)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# Direction

Enums:

- `next`: `1`
- `prev,`: `0`

# CarouselItem

Props:

- `direction`: `maybe(Direction)`
- `onAnimateOutEnd`: `maybe(Func)`
- `active`: `maybe(Bool)`
- `caption`: `maybe(Any)`

# Col

Props:

- `xsPush`: `maybe(Num)`
- `xs`: `maybe(Num)`
- `md`: `maybe(Num)`
- `lg`: `maybe(Num)`
- `xsOffset`: `maybe(Num)`
- `smOffset`: `maybe(Num)`
- `mdOffset`: `maybe(Num)`
- `lgOffset`: `maybe(Num)`
- `sm`: `maybe(Num)`
- `smPush`: `maybe(Num)`
- `mdPush`: `maybe(Num)`
- `lgPush`: `maybe(Num)`
- `xsPull`: `maybe(Num)`
- `smPull`: `maybe(Num)`
- `mdPull`: `maybe(Num)`
- `lgPull`: `maybe(Num)`
- `componentClass`: `maybe(Str)`

# DropdownButton

Props:

- `onSelect`: `maybe(Func)`
- `pullRight`: `maybe(Bool)`
- `title`: `maybe(Any)`
- `href`: `maybe(Str)`
- `onClick`: `maybe(Func)`
- `dropup`: `maybe(Bool)`
- `navItem`: `maybe(Bool)`
- `key`: `maybe(Key)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# Key

`union(Str, Num)`

# DropdownMenu

Props:

- `pullRight`: `maybe(Bool)`
- `onSelect`: `maybe(Func)`

# Glyphicon

Props:

- `glyph`: `Glyph`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# Glyph

Enums:

- `adjust`: `67`
- `align-center`: `58`
- `align-justify`: `60`
- `align-left`: `57`
- `align-right`: `59`
- `arrow-down`: `98`
- `arrow-left`: `95`
- `arrow-right`: `96`
- `arrow-up`: `97`
- `asterisk`: `0`
- `backward`: `75`
- `ban-circle`: `94`
- `barcode`: `45`
- `bell`: `124`
- `bold`: `53`
- `book`: `48`
- `bookmark`: `49`
- `briefcase`: `140`
- `bullhorn`: `123`
- `calendar`: `110`
- `camera`: `51`
- `certificate`: `125`
- `check`: `71`
- `chevron-down`: `115`
- `chevron-left`: `83`
- `chevron-right`: `84`
- `chevron-up`: `114`
- `circle-arrow-down`: `135`
- `circle-arrow-left`: `133`
- `circle-arrow-right`: `132`
- `circle-arrow-up`: `134`
- `cloud`: `4`
- `cloud-download`: `196`
- `cloud-upload`: `197`
- `cog`: `24`
- `collapse-down`: `159`
- `collapse-up`: `160`
- `comment`: `112`
- `compressed`: `181`
- `copyright-mark`: `194`
- `credit-card`: `177`
- `cutlery`: `179`
- `dashboard`: `142`
- `download`: `31`
- `download-alt`: `30`
- `earphone`: `182`
- `edit`: `69`
- `eject`: `82`
- `envelope`: `5`
- `euro`: `2`
- `exclamation-sign`: `102`
- `expand`: `158`
- `export`: `170`
- `eye-close`: `107`
- `eye-open`: `106`
- `facetime-video`: `64`
- `fast-backward`: `74`
- `fast-forward`: `80`
- `file`: `27`
- `film`: `14`
- `filter`: `139`
- `fire`: `105`
- `flag`: `39`
- `flash`: `162`
- `floppy-disk`: `172`
- `floppy-open`: `176`
- `floppy-remove`: `174`
- `floppy-save`: `175`
- `floppy-saved`: `173`
- `folder-close`: `118`
- `folder-open`: `119`
- `font`: `52`
- `forward`: `79`
- `fullscreen`: `141`
- `gbp`: `149`
- `gift`: `103`
- `glass`: `7`
- `globe`: `136`
- `hand-down`: `131`
- `hand-left`: `129`
- `hand-right`: `128`
- `hand-up`: `130`
- `hd-video`: `187`
- `hdd`: `122`
- `header`: `180`
- `headphones`: `40`
- `heart`: `10`
- `heart-empty`: `144`
- `home`: `26`
- `import`: `169`
- `inbox`: `33`
- `indent-left`: `62`
- `indent-right`: `63`
- `info-sign`: `90`
- `italic`: `54`
- `leaf`: `104`
- `link`: `145`
- `list`: `61`
- `list-alt`: `37`
- `lock`: `38`
- `log-in`: `161`
- `log-out`: `163`
- `magnet`: `113`
- `map-marker`: `66`
- `minus`: `3`
- `minus-sign`: `86`
- `move`: `72`
- `music`: `8`
- `new-window`: `164`
- `off`: `22`
- `ok`: `18`
- `ok-circle`: `93`
- `ok-sign`: `88`
- `open`: `167`
- `paperclip`: `143`
- `pause`: `77`
- `pencil`: `6`
- `phone`: `146`
- `phone-alt`: `183`
- `picture`: `65`
- `plane`: `109`
- `play`: `76`
- `play-circle`: `34`
- `plus`: `1`
- `plus-sign`: `85`
- `print`: `50`
- `pushpin`: `147`
- `qrcode`: `44`
- `question-sign`: `89`
- `random`: `111`
- `record`: `165`
- `refresh`: `36`
- `registration-mark`: `195`
- `remove`: `19`
- `remove-circle`: `92`
- `remove-sign`: `87`
- `repeat`: `35`
- `resize-full`: `100`
- `resize-horizontal`: `121`
- `resize-small`: `101`
- `resize-vertical`: `120`
- `retweet`: `116`
- `road`: `29`
- `save`: `166`
- `saved`: `168`
- `screenshot`: `91`
- `sd-video`: `186`
- `search`: `9`
- `send`: `171`
- `share`: `70`
- `share-alt`: `99`
- `shopping-cart`: `117`
- `signal`: `23`
- `sort`: `150`
- `sort-by-alphabet`: `151`
- `sort-by-alphabet-alt`: `152`
- `sort-by-attributes`: `155`
- `sort-by-attributes-alt`: `156`
- `sort-by-order`: `153`
- `sort-by-order-alt`: `154`
- `sound-5-1`: `191`
- `sound-6-1`: `192`
- `sound-7-1`: `193`
- `sound-dolby`: `190`
- `sound-stereo`: `189`
- `star`: `11`
- `star-empty`: `12`
- `stats`: `185`
- `step-backward`: `73`
- `step-forward`: `81`
- `stop`: `78`
- `subtitles`: `188`
- `tag`: `46`
- `tags`: `47`
- `tasks`: `138`
- `text-height`: `55`
- `text-width`: `56`
- `th`: `16`
- `th-large`: `15`
- `th-list`: `17`
- `thumbs-down`: `127`
- `thumbs-up`: `126`
- `time`: `28`
- `tint`: `68`
- `tower`: `184`
- `transfer`: `178`
- `trash`: `25`
- `tree-conifer`: `198`
- `tree-deciduous`: `199`
- `unchecked`: `157`
- `upload`: `32`
- `usd`: `148`
- `user`: `13`
- `volume-down`: `42`
- `volume-off`: `41`
- `volume-up`: `43`
- `warning-sign`: `108`
- `wrench`: `137`
- `zoom-in`: `20`
- `zoom-out`: `21`

# Grid

Props:

- `fluid`: `maybe(Bool)`
- `componentClass`: `maybe(Str)`

# Input

Props:

- `groupClassName`: `maybe(Str)`
- `type`: `maybe(Str)`
- `help`: `maybe(Any)`
- `addonBefore`: `maybe(Any)`
- `addonAfter`: `maybe(Any)`
- `bsStyle`: `maybe(InputStyle)`
- `hasFeedback`: `maybe(Bool)`
- `label`: `maybe(Any)`
- `wrapperClassName`: `maybe(Str)`
- `labelClassName`: `maybe(Str)`
- `checked`: `maybe(Bool)`
- `readOnly`: `maybe(Bool)`
- `multiple`: `maybe(Bool)`
- `value`: `maybe(Str)`
- `defaultValue`: `maybe(Str)`

# InputStyle

Enums:

- `error`: `2`
- `success`: `0`
- `warning`: `1`

# Jumbotron

Props:



# Label

Props:

- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# MenuItem

Props:

- `header`: `maybe(Bool)`
- `divider`: `maybe(Bool)`
- `href`: `maybe(Str)`
- `title`: `maybe(Str)`
- `onSelect`: `maybe(Func)`
- `key`: `maybe(Key)`

# Modal

Props:

- `title`: `maybe(Any)`
- `backdrop`: `maybe(Backdrop)`
- `keyboard`: `maybe(Bool)`
- `closeButton`: `maybe(Bool)`
- `animation`: `maybe(Bool)`
- `onRequestHide`: `Func`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# Backdrop

`union(enums(), Bool)`

# enums()

Enums:

- `static`: `0`

# ModalTrigger

Props:

- `container`: `maybe(Any)`
- `modal`: `Any`

# Nav

Props:

- `onSelect`: `maybe(Func)`
- `bsClass`: `maybe(BsClass)`
- `bsSize`: `maybe(BsSize)`
- `stacked`: `maybe(Bool)`
- `justified`: `maybe(Bool)`
- `bsStyle`: `maybe(NavStyle)`
- `collapsable`: `maybe(Bool)`
- `expanded`: `maybe(Bool)`
- `defaultExpanded`: `maybe(Bool)`
- `navbar`: `maybe(Bool)`
- `activeKey`: `maybe(Key)`

# NavStyle

Enums:

- `pills`: `1`
- `tabs`: `0`

# Navbar

Props:

- `brand`: `maybe(Any)`
- `fixedTop`: `maybe(Bool)`
- `staticTop`: `maybe(Bool)`
- `inverse`: `maybe(Bool)`
- `fluid`: `maybe(Bool)`
- `role`: `maybe(Str)`
- `componentClass`: `maybe(Str)`
- `fixedBottom`: `maybe(Bool)`
- `toggleButton`: `maybe(Any)`
- `onToggle`: `maybe(Func)`
- `navExpanded`: `maybe(Bool)`
- `defaultNavExpanded`: `maybe(Bool)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# NavItem

Props:

- `onSelect`: `maybe(Func)`
- `active`: `maybe(Bool)`
- `disabled`: `maybe(Bool)`
- `href`: `maybe(Str)`
- `title`: `maybe(Str)`
- `key`: `maybe(Key)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# OverlayTrigger

Props:

- `delayHide`: `maybe(Num)`
- `container`: `maybe(Any)`
- `placement`: `maybe(Placement)`
- `delay`: `maybe(Num)`
- `delayShow`: `maybe(Num)`
- `trigger`: `maybe(union(TriggerA, list(TriggerB)))`
- `defaultOverlayShown`: `maybe(Bool)`
- `overlay`: `Any`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# TriggerA

Enums:

- `click`: `1`
- `focus`: `3`
- `hover`: `2`
- `manual`: `0`

# TriggerB

Enums:

- `click`: `0`
- `focus`: `2`
- `hover`: `1`

# Placement

Enums:

- `bottom`: `2`
- `left`: `3`
- `right`: `1`
- `top`: `0`

# PageHeader

Props:



# PageItem

Props:

- `disabled`: `maybe(Bool)`
- `previous`: `maybe(Bool)`
- `next`: `maybe(Bool)`
- `onSelect`: `maybe(Func)`
- `href`: `maybe(Str)`

# Pager

Props:

- `onSelect`: `maybe(Func)`

# Panel

Props:

- `header`: `maybe(Any)`
- `footer`: `maybe(Any)`
- `onClick`: `maybe(Func)`
- `key`: `maybe(Key)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `collapsable`: `maybe(Bool)`
- `defaultExpanded`: `maybe(Bool)`
- `expanded`: `maybe(Bool)`

# PanelGroup

Props:

- `collapsable`: `maybe(Bool)`
- `activeKey`: `Any`
- `defaultActiveKey`: `Any`
- `onSelect`: `maybe(Func)`
- `accordion`: `maybe(Bool)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# Popover

Props:

- `placement`: `Placement`
- `positionLeft`: `maybe(Num)`
- `positionTop`: `maybe(Num)`
- `arrowOffsetLeft`: `maybe(Num)`
- `arrowOffsetTop`: `maybe(Num)`
- `title`: `maybe(Any)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# ProgessBar

Props:

- `min`: `maybe(Num)`
- `now`: `maybe(Num)`
- `max`: `maybe(Num)`
- `label`: `maybe(Any)`
- `srOnly`: `maybe(Bool)`
- `striped`: `maybe(Bool)`
- `active`: `maybe(Bool)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# Row

Props:

- `componentClass`: `maybe(Str)`

# SplitButton

Props:

- `pullRight`: `maybe(Bool)`
- `title`: `maybe(Any)`
- `href`: `maybe(Str)`
- `dropdownTitle`: `maybe(Any)`
- `onClick`: `maybe(Func)`
- `onSelect`: `maybe(Func)`
- `disabled`: `maybe(Bool)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# SubNav

Props:

- `onSelect`: `maybe(Func)`
- `active`: `maybe(Bool)`
- `disabled`: `maybe(Bool)`
- `href`: `maybe(Str)`
- `title`: `maybe(Str)`
- `text`: `maybe(Any)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# TabbedArea

Props:

- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(NavStyle)`
- `bsSize`: `maybe(BsSize)`
- `animation`: `maybe(Bool)`
- `onSelect`: `maybe(Func)`
- `defaultActiveKey`: `maybe(Key)`

# Table

Props:

- `striped`: `maybe(Bool)`
- `bordered`: `maybe(Bool)`
- `condensed`: `maybe(Bool)`
- `hover`: `maybe(Bool)`
- `responsive`: `maybe(Bool)`

# TabPane

Props:

- `key`: `maybe(Key)`
- `tab`: `maybe(Str)`

# Tooltip

Props:

- `placement`: `maybe(Placement)`
- `positionLeft`: `maybe(Num)`
- `positionTop`: `maybe(Num)`
- `arrowOffsetLeft`: `maybe(Num)`
- `arrowOffsetTop`: `maybe(Num)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`

# Well

Props:

- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`


