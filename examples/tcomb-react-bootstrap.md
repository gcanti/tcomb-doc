# Accordion

`Accordion` is a `struct` with the following props:

- `__tag__`: `Accordion`
- `children`: `Any`

# Any

`Any` is a `irriducible`

 # Affix

`Affix` is a `struct` with the following props:

- `__tag__`: `Affix`
- `offset`: `maybe(Num)`
- `offsetTop`: `maybe(Num)`
- `offsetBottom`: `maybe(Num)`
- `children`: `Renderable`

# Renderable

`Renderable` is a `irriducible`

 # Alert

`Alert` is a `subtype` of `struct`

# Badge

`Badge` is a `struct` with the following props:

- `__tag__`: `Badge`
- `pullRight`: `maybe(Bool)`
- `children`: `Renderable`

# Button

`Button` is a `struct` with the following props:

- `__tag__`: `Button`
- `bsStyle`: `maybe(ButtonBsStyle)`
- `bsSize`: `maybe(BsSize)`
- `active`: `maybe(Bool)`
- `disabled`: `maybe(Bool)`
- `block`: `maybe(Bool)`
- `navItem`: `maybe(Bool)`
- `navDropdown`: `maybe(Bool)`
- `children`: `Renderable`
- `onClick`: `maybe(Func)`

# ButtonGroup

`ButtonGroup` is a `struct` with the following props:

- `__tag__`: `ButtonGroup`
- `vertical`: `maybe(Bool)`
- `justified`: `maybe(Bool)`
- `children`: `Buttons`

# Buttons

`Buttons` is a `list` of `Button`

# ButtonToolbar

`ButtonToolbar` is a `struct` with the following props:

- `__tag__`: `ButtonToolbar`
- `children`: `ButtonGroups`

# ButtonGroups

`ButtonGroups` is a `list` of `ButtonGroup`

# Carousel

`Carousel` is a `struct` with the following props:

- `onSelect`: `maybe(Func)`
- `__tag__`: `Carousel`
- `indicators`: `maybe(Bool)`
- `controls`: `maybe(Bool)`
- `pauseOnHover`: `maybe(Bool)`
- `wrap`: `maybe(Bool)`
- `slide`: `maybe(Bool)`
- `onSlideEnd`: `maybe(Func)`
- `activeIndex`: `maybe(Num)`
- `defaultActiveIndex`: `maybe(Num)`
- `direction`: `maybe(Direction)`
- `children`: `CarouselItems`

# CarouselItems

`CarouselItems` is a `list` of `CarouselItem`

# CarouselItem

`CarouselItem` is a `struct` with the following props:

- `__tag__`: `CarouselItem`
- `direction`: `maybe(Direction)`
- `onAnimateOutEnd`: `maybe(Func)`
- `active`: `maybe(Bool)`
- `caption`: `maybe(Renderable)`
- `children`: `Any`

# Col

`Col` is a `struct` with the following props:

- `xsPush`: `maybe(ColInt)`
- `__tag__`: `Col`
- `sm`: `maybe(ColInt)`
- `md`: `maybe(ColInt)`
- `lg`: `maybe(ColInt)`
- `xsOffset`: `maybe(ColInt)`
- `smOffset`: `maybe(ColInt)`
- `mdOffset`: `maybe(ColInt)`
- `lgOffset`: `maybe(ColInt)`
- `xs`: `maybe(ColInt)`
- `smPush`: `maybe(ColInt)`
- `mdPush`: `maybe(ColInt)`
- `lgPush`: `maybe(ColInt)`
- `xsPull`: `maybe(ColInt)`
- `smPull`: `maybe(ColInt)`
- `mdPull`: `maybe(ColInt)`
- `lgPull`: `maybe(ColInt)`
- `className`: `maybe(ComponentClass)`
- `children`: `Any`

# DropdownButton

`DropdownButton` is a `struct` with the following props:

- `href`: `maybe(Str)`
- `__tag__`: `DropdownButton`
- `bsSize`: `maybe(BsSize)`
- `pullRight`: `maybe(Bool)`
- `dropup`: `maybe(Bool)`
- `title`: `maybe(Renderable)`
- `bsStyle`: `maybe(ButtonBsStyle)`
- `onClick`: `maybe(Func)`
- `onSelect`: `maybe(Func)`
- `navItem`: `maybe(Bool)`
- `key`: `maybe(Key)`
- `children`: `MenuItems`

# MenuItems

`MenuItems` is a `list` of `MenuItem`

# MenuItem

`MenuItem` is a `subtype` of `struct`

# DropdownMenu

`DropdownMenu` is a `struct` with the following props:

- `__tag__`: `DropdownMenu`
- `pullRight`: `maybe(Bool)`
- `onSelect`: `maybe(Func)`
- `children`: `Any`

# Glyphicon

`Glyphicon` is a `struct` with the following props:

- `__tag__`: `Glyphicon`
- `glyph`: `Glyph`

# Glyph

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

# Grid

`Grid` is a `struct` with the following props:

- `__tag__`: `Grid`
- `fluid`: `maybe(Bool)`
- `className`: `maybe(ComponentClass)`
- `children`: `Any`

# Input

`Input` is a `struct` with the following props:

- `labelClassName`: `maybe(Str)`
- `__tag__`: `Input`
- `bsStyle`: `maybe(InputBsStyle)`
- `label`: `maybe(Renderable)`
- `help`: `maybe(Renderable)`
- `addonBefore`: `maybe(Renderable)`
- `addonAfter`: `maybe(Renderable)`
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
- `children`: `maybe(Renderable)`
- `onClick`: `maybe(Func)`
- `onChange`: `maybe(Func)`

# InputType

`InputType` is an `enums` of:

- `"checkbox"`: `"checkbox"`
- `"password"`: `"password"`
- `"radio"`: `"radio"`
- `"select"`: `"select"`
- `"static"`: `"static"`
- `"text"`: `"text"`
- `"textarea"`: `"textarea"`

# Jumbotron

`Jumbotron` is a `struct` with the following props:

- `__tag__`: `Jumbotron`
- `children`: `Any`

# Label

`Label` is a `struct` with the following props:

- `__tag__`: `Label`
- `className`: `ComponentClass`
- `children`: `Any`

# ComponentClass

`ComponentClass` is a `irriducible`

 # Nav

`Nav` is a `struct` with the following props:

- `collapsable`: `maybe(Bool)`
- `__tag__`: `Nav`
- `stacked`: `maybe(Bool)`
- `justified`: `maybe(Bool)`
- `onSelect`: `maybe(Func)`
- `bsStyle`: `maybe(NavBsStyle)`
- `expanded`: `maybe(Bool)`
- `defaultExpanded`: `maybe(Bool)`
- `navbar`: `maybe(Bool)`
- `activeKey`: `maybe(Key)`
- `children`: `Any`

# Navbar

`Navbar` is a `struct` with the following props:

- `role`: `maybe(Str)`
- `__tag__`: `Navbar`
- `fixedBottom`: `maybe(Bool)`
- `staticTop`: `maybe(Bool)`
- `inverse`: `maybe(Bool)`
- `fluid`: `maybe(Bool)`
- `fixedTop`: `maybe(Bool)`
- `brand`: `maybe(Renderable)`
- `toggleButton`: `maybe(Renderable)`
- `onToggle`: `maybe(Func)`
- `navExpanded`: `maybe(Bool)`
- `defaultNavExpanded`: `maybe(Bool)`
- `children`: `Any`

# NavItem

`NavItem` is a `struct` with the following props:

- `__tag__`: `NavItem`
- `onSelect`: `maybe(Func)`
- `active`: `maybe(Bool)`
- `disabled`: `maybe(Bool)`
- `href`: `maybe(Str)`
- `title`: `maybe(Str)`
- `key`: `maybe(Key)`
- `children`: `Any`

# ModalTrigger

`ModalTrigger` is a `struct` with the following props:

- `__tag__`: `ModalTrigger`
- `container`: `maybe(Mountable)`
- `children`: `Any`

# OverlayTrigger

`OverlayTrigger` is a `struct` with the following props:

- `__tag__`: `OverlayTrigger`
- `container`: `maybe(Mountable)`
- `trigger`: `maybe(Trigger)`
- `placement`: `maybe(Placement)`
- `delay`: `maybe(PositiveInt)`
- `delayShow`: `maybe(PositiveInt)`
- `delayHide`: `maybe(PositiveInt)`
- `defaultOverlayShown`: `maybe(Bool)`
- `overlay`: `Renderable`
- `children`: `Any`

# PageHeader

`PageHeader` is a `struct` with the following props:

- `__tag__`: `PageHeader`
- `children`: `Any`

# Panel

`Panel` is a `struct` with the following props:

- `__tag__`: `Panel`
- `bsStyle`: `maybe(PanelBsStyle)`
- `header`: `maybe(Renderable)`
- `footer`: `maybe(Renderable)`
- `onClick`: `maybe(Func)`
- `key`: `maybe(Key)`
- `children`: `Any`
- `collapsable`: `maybe(Bool)`
- `defaultExpanded`: `maybe(Bool)`
- `expanded`: `maybe(Bool)`

# PanelGroup

`PanelGroup` is a `struct` with the following props:

- `__tag__`: `PanelGroup`
- `collapsable`: `maybe(Bool)`
- `activeKey`: `maybe(Key)`
- `defaultActiveKey`: `maybe(Key)`
- `onSelect`: `maybe(Func)`
- `accordion`: `maybe(Bool)`
- `children`: `Panels`

# Panels

`Panels` is a `list` of `Panel`

# PageItem

`PageItem` is a `struct` with the following props:

- `__tag__`: `PageItem`
- `disabled`: `maybe(Bool)`
- `previous`: `maybe(Bool)`
- `next`: `maybe(Bool)`
- `onSelect`: `maybe(Func)`
- `href`: `maybe(Str)`
- `children`: `Any`

# Pager

`Pager` is a `struct` with the following props:

- `__tag__`: `Pager`
- `onSelect`: `maybe(Func)`
- `children`: `PageItems`

# PageItems

`PageItems` is a `list` of `PageItem`

# Popover

`Popover` is a `struct` with the following props:

- `__tag__`: `Popover`
- `placement`: `Placement`
- `positionLeft`: `maybe(Num)`
- `positionTop`: `maybe(Num)`
- `arrowOffsetLeft`: `maybe(Num)`
- `arrowOffsetTop`: `maybe(Num)`
- `title`: `maybe(Renderable)`
- `children`: `Any`

# Placement

`Placement` is an `enums` of:

- `"bottom"`: `"bottom"`
- `"left"`: `"left"`
- `"right"`: `"right"`
- `"top"`: `"top"`

# ProgressBar

`ProgressBar` is a `struct` with the following props:

- `__tag__`: `ProgressBar`
- `bsStyle`: `BsStyle`
- `min`: `maybe(Num)`
- `now`: `maybe(Num)`
- `max`: `maybe(Num)`
- `label`: `Any`
- `srOnly`: `maybe(Bool)`
- `striped`: `maybe(Bool)`
- `active`: `maybe(Bool)`
- `children`: `Any`

# BsStyle

`BsStyle` is an `enums` of:

- `"danger"`: `"danger"`
- `"info"`: `"info"`
- `"success"`: `"success"`
- `"warning"`: `"warning"`

# Row

`Row` is a `struct` with the following props:

- `__tag__`: `Row`
- `className`: `maybe(ComponentClass)`
- `children`: `Any`

# SplitButton

`SplitButton` is a `struct` with the following props:

- `href`: `maybe(Str)`
- `__tag__`: `SplitButton`
- `bsSize`: `maybe(BsSize)`
- `pullRight`: `maybe(Bool)`
- `title`: `maybe(Renderable)`
- `bsStyle`: `maybe(ButtonBsStyle)`
- `dropdownTitle`: `maybe(Renderable)`
- `onClick`: `maybe(Func)`
- `onSelect`: `maybe(Func)`
- `disabled`: `maybe(Bool)`
- `children`: `Any`

# SubNav

`SubNav` is a `struct` with the following props:

- `__tag__`: `SubNav`
- `onSelect`: `maybe(Func)`
- `active`: `maybe(Bool)`
- `disabled`: `maybe(Bool)`
- `href`: `maybe(Str)`
- `title`: `maybe(Str)`
- `text`: `maybe(Renderable)`
- `children`: `Any`

# TabbedArea

`TabbedArea` is a `struct` with the following props:

- `__tag__`: `TabbedArea`
- `bsStyle`: `maybe(NavBsStyle)`
- `animation`: `maybe(Bool)`
- `onSelect`: `maybe(Func)`
- `defaultActiveKey`: `maybe(Key)`
- `children`: `TabPanes`

# TabPanes

`TabPanes` is a `list` of `TabPane`

# TabPane

`TabPane` is a `struct` with the following props:

- `__tag__`: `TabPane`
- `key`: `maybe(Key)`
- `tab`: `maybe(Str)`
- `children`: `Any`

# Table

`Table` is a `struct` with the following props:

- `__tag__`: `Table`
- `striped`: `maybe(Bool)`
- `bordered`: `maybe(Bool)`
- `condensed`: `maybe(Bool)`
- `hover`: `maybe(Bool)`
- `responsive`: `maybe(Bool)`
- `children`: `Any`

# Well

`Well` is a `struct` with the following props:

- `__tag__`: `Well`
- `bsSize`: `maybe(BsSize)`
- `children`: `Any`


