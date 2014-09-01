#### Accordion

`Accordion` is a `struct` with the following props:

- `children`: `Any`
- `__name__`: `Accordion`

#### Any

`Any` is a `primitive`

 #### Affix

`Affix` is a `struct` with the following props:

- `children`: `Any`
- `offset`: `maybe(Num)`
- `offsetTop`: `maybe(Num)`
- `offsetBottom`: `maybe(Num)`
- `__name__`: `Affix`

#### Num

`Num` is a `primitive`

 #### Alert

`Alert` is a `struct` with the following props:

- `children`: `Any`
- `onDismiss`: `maybe(Func)`
- `dismissAfter`: `maybe(Num)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `Alert`

#### Func

`Func` is a `primitive`

 #### BsClass

`BsClass` is an `enums` of:

- `"alert"`: `"alert"`
- `"button"`: `"btn"`
- `"button-group"`: `"btn-group"`
- `"button-toolbar"`: `"btn-toolbar"`
- `"column"`: `"col"`
- `"form"`: `"form"`
- `"glyphicon"`: `"glyphicon"`
- `"input-group"`: `"input-group"`
- `"label"`: `"label"`
- `"modal"`: `"modal"`
- `"nav"`: `"nav"`
- `"navbar"`: `"navbar"`
- `"panel"`: `"panel"`
- `"panel-group"`: `"panel-group"`
- `"progress-bar"`: `"progress-bar"`
- `"row"`: `"row"`
- `"well"`: `"well"`

#### BsStyle

`BsStyle` is an `enums` of:

- `"danger"`: `"danger"`
- `"default"`: `"default"`
- `"info"`: `"info"`
- `"inline"`: `"inline"`
- `"link"`: `"link"`
- `"pills"`: `"pills"`
- `"primary"`: `"primary"`
- `"success"`: `"success"`
- `"tabs"`: `"tabs"`
- `"warning"`: `"warning"`

#### BsSize

`BsSize` is an `enums` of:

- `"large"`: `"lg"`
- `"medium"`: `"md"`
- `"small"`: `"sm"`
- `"xsmall"`: `"xs"`

#### Badge

`Badge` is a `struct` with the following props:

- `children`: `Any`
- `pullRight`: `maybe(Bool)`
- `__name__`: `Badge`

#### Bool

`Bool` is a `primitive`

 #### Button

`Button` is a `struct` with the following props:

- `children`: `Any`
- `active`: `maybe(Bool)`
- `disabled`: `maybe(Bool)`
- `block`: `maybe(Bool)`
- `navItem`: `maybe(Bool)`
- `navDropdown`: `maybe(Bool)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `Button`

#### ButtonGroup

`ButtonGroup` is a `struct` with the following props:

- `children`: `list(Button)`
- `vertical`: `maybe(Bool)`
- `justified`: `maybe(Bool)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `ButtonGroup`

#### ButtonToolbar

`ButtonToolbar` is a `struct` with the following props:

- `children`: `Any`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `ButtonToolbar`

#### Carousel

`Carousel` is a `struct` with the following props:

- `onSlideEnd`: `maybe(Func)`
- `children`: `Any`
- `indicators`: `maybe(Bool)`
- `controls`: `maybe(Bool)`
- `pauseOnHover`: `maybe(Bool)`
- `wrap`: `maybe(Bool)`
- `onSelect`: `maybe(Func)`
- `slide`: `maybe(Bool)`
- `activeIndex`: `maybe(Num)`
- `defaultActiveIndex`: `maybe(Num)`
- `direction`: `maybe(Direction)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `Carousel`

#### Direction

`Direction` is an `enums` of:

- `"next"`: `"next"`
- `"prev"`: `"prev"`

#### CarouselItem

`CarouselItem` is a `struct` with the following props:

- `children`: `Any`
- `direction`: `maybe(Direction)`
- `onAnimateOutEnd`: `maybe(Func)`
- `active`: `maybe(Bool)`
- `caption`: `maybe(Any)`
- `__name__`: `CarouselItem`

#### Col

`Col` is a `struct` with the following props:

- `xsPush`: `maybe(Num)`
- `children`: `Any`
- `sm`: `maybe(Num)`
- `md`: `maybe(Num)`
- `lg`: `maybe(Num)`
- `xsOffset`: `maybe(Num)`
- `smOffset`: `maybe(Num)`
- `mdOffset`: `maybe(Num)`
- `lgOffset`: `maybe(Num)`
- `xs`: `maybe(Num)`
- `smPush`: `maybe(Num)`
- `mdPush`: `maybe(Num)`
- `lgPush`: `maybe(Num)`
- `xsPull`: `maybe(Num)`
- `smPull`: `maybe(Num)`
- `mdPull`: `maybe(Num)`
- `lgPull`: `maybe(Num)`
- `className`: `maybe(Str)`
- `__name__`: `Col`

#### Str

`Str` is a `primitive`

 #### DropdownButton

`DropdownButton` is a `struct` with the following props:

- `onSelect`: `maybe(Func)`
- `children`: `Any`
- `dropup`: `maybe(Bool)`
- `title`: `maybe(Any)`
- `href`: `maybe(Str)`
- `onClick`: `maybe(Func)`
- `pullRight`: `maybe(Bool)`
- `navItem`: `maybe(Bool)`
- `key`: `maybe(Key)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `DropdownButton`

#### Key

`Key` is a `union` of `Str, Num`

#### DropdownMenu

`DropdownMenu` is a `struct` with the following props:

- `children`: `Any`
- `pullRight`: `maybe(Bool)`
- `onSelect`: `maybe(Func)`
- `__name__`: `DropdownMenu`

#### Glyphicon

`Glyphicon` is a `struct` with the following props:

- `glyph`: `Glyph`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `Glyphicon`

#### Glyph

`Glyph` is an `enums` of:

- `"adjust"`: `"adjust"`
- `"align-center"`: `"align-center"`
- `"align-justify"`: `"align-justify"`
- `"align-left"`: `"align-left"`
- `"align-right"`: `"align-right"`
- `"arrow-down"`: `"arrow-down"`
- `"arrow-left"`: `"arrow-left"`
- `"arrow-right"`: `"arrow-right"`
- `"arrow-up"`: `"arrow-up"`
- `"asterisk"`: `"asterisk"`
- `"backward"`: `"backward"`
- `"ban-circle"`: `"ban-circle"`
- `"barcode"`: `"barcode"`
- `"bell"`: `"bell"`
- `"bold"`: `"bold"`
- `"book"`: `"book"`
- `"bookmark"`: `"bookmark"`
- `"briefcase"`: `"briefcase"`
- `"bullhorn"`: `"bullhorn"`
- `"calendar"`: `"calendar"`
- `"camera"`: `"camera"`
- `"certificate"`: `"certificate"`
- `"check"`: `"check"`
- `"chevron-down"`: `"chevron-down"`
- `"chevron-left"`: `"chevron-left"`
- `"chevron-right"`: `"chevron-right"`
- `"chevron-up"`: `"chevron-up"`
- `"circle-arrow-down"`: `"circle-arrow-down"`
- `"circle-arrow-left"`: `"circle-arrow-left"`
- `"circle-arrow-right"`: `"circle-arrow-right"`
- `"circle-arrow-up"`: `"circle-arrow-up"`
- `"cloud"`: `"cloud"`
- `"cloud-download"`: `"cloud-download"`
- `"cloud-upload"`: `"cloud-upload"`
- `"cog"`: `"cog"`
- `"collapse-down"`: `"collapse-down"`
- `"collapse-up"`: `"collapse-up"`
- `"comment"`: `"comment"`
- `"compressed"`: `"compressed"`
- `"copyright-mark"`: `"copyright-mark"`
- `"credit-card"`: `"credit-card"`
- `"cutlery"`: `"cutlery"`
- `"dashboard"`: `"dashboard"`
- `"download"`: `"download"`
- `"download-alt"`: `"download-alt"`
- `"earphone"`: `"earphone"`
- `"edit"`: `"edit"`
- `"eject"`: `"eject"`
- `"envelope"`: `"envelope"`
- `"euro"`: `"euro"`
- `"exclamation-sign"`: `"exclamation-sign"`
- `"expand"`: `"expand"`
- `"export"`: `"export"`
- `"eye-close"`: `"eye-close"`
- `"eye-open"`: `"eye-open"`
- `"facetime-video"`: `"facetime-video"`
- `"fast-backward"`: `"fast-backward"`
- `"fast-forward"`: `"fast-forward"`
- `"file"`: `"file"`
- `"film"`: `"film"`
- `"filter"`: `"filter"`
- `"fire"`: `"fire"`
- `"flag"`: `"flag"`
- `"flash"`: `"flash"`
- `"floppy-disk"`: `"floppy-disk"`
- `"floppy-open"`: `"floppy-open"`
- `"floppy-remove"`: `"floppy-remove"`
- `"floppy-save"`: `"floppy-save"`
- `"floppy-saved"`: `"floppy-saved"`
- `"folder-close"`: `"folder-close"`
- `"folder-open"`: `"folder-open"`
- `"font"`: `"font"`
- `"forward"`: `"forward"`
- `"fullscreen"`: `"fullscreen"`
- `"gbp"`: `"gbp"`
- `"gift"`: `"gift"`
- `"glass"`: `"glass"`
- `"globe"`: `"globe"`
- `"hand-down"`: `"hand-down"`
- `"hand-left"`: `"hand-left"`
- `"hand-right"`: `"hand-right"`
- `"hand-up"`: `"hand-up"`
- `"hd-video"`: `"hd-video"`
- `"hdd"`: `"hdd"`
- `"header"`: `"header"`
- `"headphones"`: `"headphones"`
- `"heart"`: `"heart"`
- `"heart-empty"`: `"heart-empty"`
- `"home"`: `"home"`
- `"import"`: `"import"`
- `"inbox"`: `"inbox"`
- `"indent-left"`: `"indent-left"`
- `"indent-right"`: `"indent-right"`
- `"info-sign"`: `"info-sign"`
- `"italic"`: `"italic"`
- `"leaf"`: `"leaf"`
- `"link"`: `"link"`
- `"list"`: `"list"`
- `"list-alt"`: `"list-alt"`
- `"lock"`: `"lock"`
- `"log-in"`: `"log-in"`
- `"log-out"`: `"log-out"`
- `"magnet"`: `"magnet"`
- `"map-marker"`: `"map-marker"`
- `"minus"`: `"minus"`
- `"minus-sign"`: `"minus-sign"`
- `"move"`: `"move"`
- `"music"`: `"music"`
- `"new-window"`: `"new-window"`
- `"off"`: `"off"`
- `"ok"`: `"ok"`
- `"ok-circle"`: `"ok-circle"`
- `"ok-sign"`: `"ok-sign"`
- `"open"`: `"open"`
- `"paperclip"`: `"paperclip"`
- `"pause"`: `"pause"`
- `"pencil"`: `"pencil"`
- `"phone"`: `"phone"`
- `"phone-alt"`: `"phone-alt"`
- `"picture"`: `"picture"`
- `"plane"`: `"plane"`
- `"play"`: `"play"`
- `"play-circle"`: `"play-circle"`
- `"plus"`: `"plus"`
- `"plus-sign"`: `"plus-sign"`
- `"print"`: `"print"`
- `"pushpin"`: `"pushpin"`
- `"qrcode"`: `"qrcode"`
- `"question-sign"`: `"question-sign"`
- `"random"`: `"random"`
- `"record"`: `"record"`
- `"refresh"`: `"refresh"`
- `"registration-mark"`: `"registration-mark"`
- `"remove"`: `"remove"`
- `"remove-circle"`: `"remove-circle"`
- `"remove-sign"`: `"remove-sign"`
- `"repeat"`: `"repeat"`
- `"resize-full"`: `"resize-full"`
- `"resize-horizontal"`: `"resize-horizontal"`
- `"resize-small"`: `"resize-small"`
- `"resize-vertical"`: `"resize-vertical"`
- `"retweet"`: `"retweet"`
- `"road"`: `"road"`
- `"save"`: `"save"`
- `"saved"`: `"saved"`
- `"screenshot"`: `"screenshot"`
- `"sd-video"`: `"sd-video"`
- `"search"`: `"search"`
- `"send"`: `"send"`
- `"share"`: `"share"`
- `"share-alt"`: `"share-alt"`
- `"shopping-cart"`: `"shopping-cart"`
- `"signal"`: `"signal"`
- `"sort"`: `"sort"`
- `"sort-by-alphabet"`: `"sort-by-alphabet"`
- `"sort-by-alphabet-alt"`: `"sort-by-alphabet-alt"`
- `"sort-by-attributes"`: `"sort-by-attributes"`
- `"sort-by-attributes-alt"`: `"sort-by-attributes-alt"`
- `"sort-by-order"`: `"sort-by-order"`
- `"sort-by-order-alt"`: `"sort-by-order-alt"`
- `"sound-5-1"`: `"sound-5-1"`
- `"sound-6-1"`: `"sound-6-1"`
- `"sound-7-1"`: `"sound-7-1"`
- `"sound-dolby"`: `"sound-dolby"`
- `"sound-stereo"`: `"sound-stereo"`
- `"star"`: `"star"`
- `"star-empty"`: `"star-empty"`
- `"stats"`: `"stats"`
- `"step-backward"`: `"step-backward"`
- `"step-forward"`: `"step-forward"`
- `"stop"`: `"stop"`
- `"subtitles"`: `"subtitles"`
- `"tag"`: `"tag"`
- `"tags"`: `"tags"`
- `"tasks"`: `"tasks"`
- `"text-height"`: `"text-height"`
- `"text-width"`: `"text-width"`
- `"th"`: `"th"`
- `"th-large"`: `"th-large"`
- `"th-list"`: `"th-list"`
- `"thumbs-down"`: `"thumbs-down"`
- `"thumbs-up"`: `"thumbs-up"`
- `"time"`: `"time"`
- `"tint"`: `"tint"`
- `"tower"`: `"tower"`
- `"transfer"`: `"transfer"`
- `"trash"`: `"trash"`
- `"tree-conifer"`: `"tree-conifer"`
- `"tree-deciduous"`: `"tree-deciduous"`
- `"unchecked"`: `"unchecked"`
- `"upload"`: `"upload"`
- `"usd"`: `"usd"`
- `"user"`: `"user"`
- `"volume-down"`: `"volume-down"`
- `"volume-off"`: `"volume-off"`
- `"volume-up"`: `"volume-up"`
- `"warning-sign"`: `"warning-sign"`
- `"wrench"`: `"wrench"`
- `"zoom-in"`: `"zoom-in"`
- `"zoom-out"`: `"zoom-out"`

#### Grid

`Grid` is a `struct` with the following props:

- `children`: `Any`
- `fluid`: `maybe(Bool)`
- `className`: `maybe(Str)`
- `__name__`: `Grid`

#### Input

`Input` is a `struct` with the following props:

- `labelClassName`: `maybe(Str)`
- `children`: `Any`
- `label`: `maybe(Any)`
- `help`: `maybe(Any)`
- `addonBefore`: `maybe(Any)`
- `addonAfter`: `maybe(Any)`
- `bsStyle`: `maybe(InputStyle)`
- `hasFeedback`: `maybe(Bool)`
- `groupClassName`: `maybe(Str)`
- `wrapperClassName`: `maybe(Str)`
- `type`: `InputType`
- `checked`: `maybe(Bool)`
- `readOnly`: `maybe(Bool)`
- `multiple`: `maybe(Bool)`
- `value`: `maybe(Str)`
- `defaultValue`: `maybe(Str)`
- `ref`: `maybe(Str)`
- `onClick`: `maybe(Func)`
- `onChange`: `maybe(Func)`
- `__name__`: `Input`

#### InputType

`InputType` is an `enums` of:

- `"checkbox"`: `"checkbox"`
- `"password"`: `"password"`
- `"radio"`: `"radio"`
- `"select"`: `"select"`
- `"static"`: `"static"`
- `"text"`: `"text"`
- `"textarea"`: `"textarea"`

#### InputStyle

`InputStyle` is an `enums` of:

- `"error"`: `"error"`
- `"success"`: `"success"`
- `"warning"`: `"warning"`

#### Jumbotron

`Jumbotron` is a `struct` with the following props:

- `children`: `Any`
- `__name__`: `Jumbotron`

#### Label

`Label` is a `struct` with the following props:

- `children`: `Any`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `Label`

#### MenuItem

`MenuItem` is a `struct` with the following props:

- `children`: `Any`
- `header`: `maybe(Bool)`
- `divider`: `maybe(Bool)`
- `href`: `maybe(Str)`
- `title`: `maybe(Str)`
- `onSelect`: `maybe(Func)`
- `key`: `maybe(Key)`
- `__name__`: `MenuItem`

#### Modal

`Modal` is a `struct` with the following props:

- `animation`: `maybe(Bool)`
- `children`: `Any`
- `backdrop`: `maybe(Backdrop)`
- `keyboard`: `maybe(Bool)`
- `closeButton`: `maybe(Bool)`
- `title`: `maybe(Any)`
- `onRequestHide`: `Func`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `Modal`

#### Backdrop

`Backdrop` is a `union` of `enums, Bool`

#### enums

`enums` is an `enums` of:

- `"static"`: `"static"`

#### Nav

`Nav` is a `struct` with the following props:

- `onSelect`: `maybe(Func)`
- `children`: `Any`
- `bsStyle`: `maybe(NavStyle)`
- `bsSize`: `maybe(BsSize)`
- `stacked`: `maybe(Bool)`
- `justified`: `maybe(Bool)`
- `bsClass`: `maybe(BsClass)`
- `collapsable`: `maybe(Bool)`
- `expanded`: `maybe(Bool)`
- `defaultExpanded`: `maybe(Bool)`
- `navbar`: `maybe(Bool)`
- `activeKey`: `maybe(Key)`
- `__name__`: `Nav`

#### NavStyle

`NavStyle` is an `enums` of:

- `"pills"`: `"pills"`
- `"tabs"`: `"tabs"`

#### Navbar

`Navbar` is a `struct` with the following props:

- `toggleButton`: `maybe(Any)`
- `children`: `Any`
- `fixedBottom`: `maybe(Bool)`
- `staticTop`: `maybe(Bool)`
- `inverse`: `maybe(Bool)`
- `fluid`: `maybe(Bool)`
- `role`: `maybe(Str)`
- `brand`: `maybe(Any)`
- `fixedTop`: `maybe(Bool)`
- `onToggle`: `maybe(Func)`
- `navExpanded`: `maybe(Bool)`
- `defaultNavExpanded`: `maybe(Bool)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `Navbar`

#### NavItem

`NavItem` is a `struct` with the following props:

- `title`: `maybe(Str)`
- `children`: `Any`
- `active`: `maybe(Bool)`
- `disabled`: `maybe(Bool)`
- `href`: `maybe(Str)`
- `onSelect`: `maybe(Func)`
- `key`: `maybe(Key)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `NavItem`

#### ModalTrigger

`ModalTrigger` is a `struct` with the following props:

- `children`: `Any`
- `container`: `maybe(Mountable)`
- `modal`: `Any`
- `__name__`: `ModalTrigger`

#### Mountable

`Mountable` is a `subtype` of `Any`

#### OverlayTrigger

`OverlayTrigger` is a `struct` with the following props:

- `delayHide`: `maybe(Num)`
- `children`: `Any`
- `trigger`: `maybe(union([TriggerA, list(TriggerB)]))`
- `placement`: `maybe(Placement)`
- `delay`: `maybe(Num)`
- `delayShow`: `maybe(Num)`
- `container`: `maybe(Mountable)`
- `defaultOverlayShown`: `maybe(Bool)`
- `overlay`: `Any`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `OverlayTrigger`

#### TriggerA

`TriggerA` is an `enums` of:

- `"click"`: `"click"`
- `"focus"`: `"focus"`
- `"hover"`: `"hover"`
- `"manual"`: `"manual"`

#### TriggerB

`TriggerB` is an `enums` of:

- `"click"`: `"click"`
- `"focus"`: `"focus"`
- `"hover"`: `"hover"`

#### Placement

`Placement` is an `enums` of:

- `"bottom"`: `"bottom"`
- `"left"`: `"left"`
- `"right"`: `"right"`
- `"top"`: `"top"`

#### PageHeader

`PageHeader` is a `struct` with the following props:

- `children`: `Any`
- `__name__`: `PageHeader`

#### Panel

`Panel` is a `struct` with the following props:

- `bsStyle`: `maybe(BsStyle)`
- `children`: `Any`
- `footer`: `maybe(Any)`
- `onClick`: `maybe(Func)`
- `key`: `maybe(Key)`
- `bsClass`: `maybe(BsClass)`
- `header`: `maybe(Any)`
- `bsSize`: `maybe(BsSize)`
- `collapsable`: `maybe(Bool)`
- `defaultExpanded`: `maybe(Bool)`
- `expanded`: `maybe(Bool)`
- `__name__`: `Panel`

#### PanelGroup

`PanelGroup` is a `struct` with the following props:

- `children`: `Any`
- `collapsable`: `maybe(Bool)`
- `activeKey`: `Any`
- `defaultActiveKey`: `Any`
- `onSelect`: `maybe(Func)`
- `accordion`: `maybe(Bool)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `PanelGroup`

#### PageItem

`PageItem` is a `struct` with the following props:

- `children`: `Any`
- `disabled`: `maybe(Bool)`
- `previous`: `maybe(Bool)`
- `next`: `maybe(Bool)`
- `onSelect`: `maybe(Func)`
- `href`: `maybe(Str)`
- `__name__`: `PageItem`

#### Pager

`Pager` is a `struct` with the following props:

- `children`: `Any`
- `onSelect`: `maybe(Func)`
- `__name__`: `Pager`

#### Popover

`Popover` is a `struct` with the following props:

- `arrowOffsetTop`: `maybe(Num)`
- `children`: `Any`
- `positionLeft`: `maybe(Num)`
- `positionTop`: `maybe(Num)`
- `arrowOffsetLeft`: `maybe(Num)`
- `placement`: `Placement`
- `title`: `maybe(Any)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `Popover`

#### ProgressBar

`ProgressBar` is a `struct` with the following props:

- `striped`: `maybe(Bool)`
- `children`: `Any`
- `now`: `maybe(Num)`
- `max`: `maybe(Num)`
- `label`: `maybe(Any)`
- `srOnly`: `maybe(Bool)`
- `min`: `maybe(Num)`
- `active`: `maybe(Bool)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `ProgressBar`

#### Row

`Row` is a `struct` with the following props:

- `children`: `Any`
- `className`: `maybe(Str)`
- `__name__`: `Row`

#### SplitButton

`SplitButton` is a `struct` with the following props:

- `onSelect`: `maybe(Func)`
- `children`: `Any`
- `title`: `maybe(Any)`
- `href`: `maybe(Str)`
- `dropdownTitle`: `maybe(Any)`
- `onClick`: `maybe(Func)`
- `pullRight`: `maybe(Bool)`
- `disabled`: `maybe(Bool)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `SplitButton`

#### SubNav

`SubNav` is a `struct` with the following props:

- `title`: `maybe(Str)`
- `children`: `Any`
- `active`: `maybe(Bool)`
- `disabled`: `maybe(Bool)`
- `href`: `maybe(Str)`
- `onSelect`: `maybe(Func)`
- `text`: `maybe(Any)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `SubNav`

#### TabbedArea

`TabbedArea` is a `struct` with the following props:

- `children`: `Any`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(NavStyle)`
- `bsSize`: `maybe(BsSize)`
- `animation`: `maybe(Bool)`
- `onSelect`: `maybe(Func)`
- `defaultActiveKey`: `maybe(Key)`
- `__name__`: `TabbedArea`

#### Table

`Table` is a `struct` with the following props:

- `children`: `Any`
- `striped`: `maybe(Bool)`
- `bordered`: `maybe(Bool)`
- `condensed`: `maybe(Bool)`
- `hover`: `maybe(Bool)`
- `responsive`: `maybe(Bool)`
- `__name__`: `Table`

#### TabPane

`TabPane` is a `struct` with the following props:

- `children`: `Any`
- `key`: `maybe(Key)`
- `tab`: `maybe(Str)`
- `__name__`: `TabPane`

#### Tooltip

`Tooltip` is a `struct` with the following props:

- `children`: `Any`
- `placement`: `maybe(Placement)`
- `positionLeft`: `maybe(Num)`
- `positionTop`: `maybe(Num)`
- `arrowOffsetLeft`: `maybe(Num)`
- `arrowOffsetTop`: `maybe(Num)`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `Tooltip`

#### Well

`Well` is a `struct` with the following props:

- `children`: `Any`
- `bsClass`: `maybe(BsClass)`
- `bsStyle`: `maybe(BsStyle)`
- `bsSize`: `maybe(BsSize)`
- `__name__`: `Well`


