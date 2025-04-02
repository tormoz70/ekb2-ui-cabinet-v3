/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Описание ошибки */
export interface ErrorMessageResponse {
  /** Текст сообщения */
  msg?: string;
}

export interface RegInfoShareDto {
  /**
   * ID организации получателя
   * @format int64
   */
  orgId?: number;
  /** Доступ предоставлен */
  isshared2?: boolean;
}

/** Объект с данными о пользователе */
export interface OrgRptUser {
  /**
   * ID страны
   * @format int64
   */
  nationId?: number;
  /**
   * ID кинотеатра
   * @format int64
   */
  idOrg?: number;
  /** ID пользователя */
  usrUid?: string;
  /** ID роли */
  userRole?: string;
  /** Название */
  orgname?: string;
  /** Краткое наменование */
  orgnamshrt?: string;
  /** Тип организации */
  orgtype?: string;
  /** Email */
  email?: string;
  /** Тестовый */
  test?: boolean;
  /** Доп. эл. адреса */
  emails?: string;
  /** Эл. адреса для рассылки отчетов */
  autosendaddrs?: string;
  /** @format int64 */
  orgjurId?: number;
  /** Юр. лицо */
  curJur?: string;
  /** ОГРН */
  ogrn?: string;
  /** ИНН */
  inn?: string;
  /** Паспорт */
  pasport?: string;
  /** Физ. лицо */
  physicPerson?: boolean;
  /** Контакт */
  responsPerson?: string;
  /** Телефоны */
  phoneFax?: string;
  /** Комментарии */
  comments?: string;
  /** Авторассылка ТОП20 */
  autosendtop20?: boolean;
  /**
   * Интервал авторассылкм (мин)
   * @format int32
   */
  autosendperiod?: number;
  /** Авторассылка на осн.адр. */
  autosendmaddr?: boolean;
  /** Разрешить предоставлять доступ к данным */
  rptshare?: boolean;
  /** Предоставить доступ к данным для */
  sharedata?: boolean;
  sharedesc?: string;
  /**
   * Форма собственности
   * @format int64
   */
  idProp?: number;
}

/** Объект с данными о праве на фильм */
export interface FilmPermissionListData {
  /**
   * ID
   * @format int64
   */
  permisId?: number;
  /**
   * IDПользователя
   * @format int64
   */
  idOrg?: number;
  /** Номер ПУ */
  puNumber?: string;
  /** Название фильма */
  filmname?: string;
  /** Год выпуска */
  filmyear?: string;
  /** Режиссер */
  director?: string;
  /**
   * С
   * @format date-time
   */
  dateFrom?: string;
  /**
   * По
   * @format date-time
   */
  dateTo?: string;
  /** Удален */
  isDeleted?: boolean;
  /** Владелец фильма */
  ownerName?: string;
  /**
   * owner_id
   * @format int64
   */
  ownerId?: number;
}

/** Объект с данными о киносети */
export interface OrgHolding {
  /**
   * ID страны
   * @format int64
   */
  nationId?: number;
  /**
   * ID кинотеатра
   * @format int64
   */
  idOrg?: number;
  /** ID пользователя */
  usrUid?: string;
  /** ID роли */
  userRole?: string;
  /** Название */
  orgname?: string;
  /** Краткое наменование */
  orgnamshrt?: string;
  /** Тип организации */
  orgtype?: string;
  /** Email */
  email?: string;
  /** Тестовый */
  test?: boolean;
  /** Доп. эл. адреса */
  emails?: string;
  /** Эл. адреса для рассылки отчетов */
  autosendaddrs?: string;
  /** @format int64 */
  orgjurId?: number;
  /** Юр. лицо */
  curJur?: string;
  /** ОГРН */
  ogrn?: string;
  /** ИНН */
  inn?: string;
  /** Код КЛАДР */
  kladrCode?: string;
  /** Адрес */
  address?: string;
  /** Киносеть */
  holding?: string;
  /** Название киносети */
  hldname?: string;
  /** Регистрационный номер (РН) */
  dogNum?: string;
  /**
   * Дата формирования РН
   * @format date-time
   */
  dogDate?: string;
  /** Телефон/факс */
  phoneFax?: string;
  /** Ответственное лицо */
  responsPerson?: string;
  /** Руководитель организации */
  directorName?: string;
  /** Главный бухгалтер */
  glavbuchName?: string;
  /** E-mail бухгалтерии */
  glavbuchEmail?: string;
  /** Телефон бухгалтерии */
  glavbuchPhone?: string;
  /** Телефон автоинформатора */
  autoinfoPhone?: string;
  /** Сайт */
  orgWww?: string;
  /** Наличие автоматизации системы продажи билетов */
  automatic?: boolean;
  /**
   * Id формы собственности
   * @format int64
   */
  idProp?: number;
  /**
   * Id формы управления
   * @format int64
   */
  mngmntformId?: number;
  /** Форма управления */
  mngmntformCaption?: string;
  /** Наличие оригинала регистрационной карты */
  originalDog?: boolean;
  /** Состояние */
  state?: string;
  /**
   * Код расположения
   * @format int64
   */
  location?: number;
  /** Комментарии */
  comments?: string;
  /** Паспорт */
  pasport?: string;
  /** Физ.лицо */
  physicPerson?: boolean;
  /**
   * Id Поставщика ПО
   * @format int64
   */
  idVnd?: number;
  /** @format int64 */
  closereasonId?: number;
  /**
   * Часовой пояс
   * @format int64
   */
  timeZone?: number;
  /** Наименование юридического лица */
  orgnameJur?: string;
  /** Адрес юридического лица */
  addressJur?: string;
  /** Имущественное состояние */
  stateMat?: string;
  /** Год субсидирования */
  subsidyear?: string;
  /** Зарегистрирован */
  registred?: boolean;
  /** Online */
  isonline?: boolean;
  /** Современный */
  modern?: boolean;
  /** Невыверенные данные: номер строки */
  recidIo?: string;
  /** Невыверенные данные: адрес */
  addressIo?: string;
  /** Невыверенные данные: название */
  orgnameIo?: string;
  /** Невыверенные данные: кол-во кинозалов */
  sroomcountIo?: string;
  /** Невыверенные данные: кол-во мест */
  placecountIo?: string;
  /** Невыверенные данные: общая площадь */
  ttlspaceIo?: string;
  /** Невыверенные данные: состояние */
  statematIo?: string;
  /** Невыверенные данные: оборудование */
  equipmentIo?: string;
  /** Невыверенные данные: год постройки */
  builtyearIo?: string;
  /** Невыверенные данные: примечание */
  noteIo?: string;
  /** Невыверенные данные: всего кинотеатров в населенном пункте */
  cinemacntnearIo?: string;
  /** Невыверенные данные: проэкт */
  projectIo?: string;
  /** Выверка */
  verstate?: string;
  /**
   * Кол-во кинозалов
   * @format int64
   */
  sroomCnt?: number;
  /**
   * Кол-во мест
   * @format int64
   */
  splaceCnt?: number;
  /**
   * Площадь (общ)
   * @format double
   */
  spaceTtl?: number;
  /** @format int64 */
  sroomCnt0?: number;
  /**
   * Допустимый период молчания [дней]
   * @format int64
   */
  silencePeriod?: number;
  /** Цифровой */
  dataisvalid?: string;
  /**
   * Репертуар
   * @format int64
   */
  repertId?: number;
  /**
   * Регулярность кинопоказа
   * @format int64
   */
  regularId?: number;
  /**
   * Дата регистрации в ЕАИС
   * @format date-time
   */
  regDate?: string;
  /** Закрыт оператором */
  operatorStateId?: boolean;
  /** Связанные организации */
  refOrgIds?: string;
}

/** Объект с данными о кинотеатре */
export interface OrgCinema {
  /**
   * ID страны
   * @format int64
   */
  nationId?: number;
  /**
   * ID кинотеатра
   * @format int64
   */
  idOrg?: number;
  /** ID пользователя */
  usrUid?: string;
  /** ID роли */
  userRole?: string;
  /** Название */
  orgname?: string;
  /** Краткое наменование */
  orgnamshrt?: string;
  /** Тип организации */
  orgtype?: string;
  /** Email */
  email?: string;
  /** Тестовый */
  test?: boolean;
  /** Доп. эл. адреса */
  emails?: string;
  /** Эл. адреса для рассылки отчетов */
  autosendaddrs?: string;
  /** @format int64 */
  orgjurId?: number;
  /** Юр. лицо */
  curJur?: string;
  /** ОГРН */
  ogrn?: string;
  /** ИНН */
  inn?: string;
  /** Код КЛАДР */
  kladrCode?: string;
  /** Адрес */
  address?: string;
  /** Киносеть */
  holding?: string;
  /** Название киносети */
  hldname?: string;
  /** Регистрационный номер (РН) */
  dogNum?: string;
  /**
   * Дата формирования РН
   * @format date-time
   */
  dogDate?: string;
  /** Телефон/факс */
  phoneFax?: string;
  /** Ответственное лицо */
  responsPerson?: string;
  /** Руководитель организации */
  directorName?: string;
  /** Главный бухгалтер */
  glavbuchName?: string;
  /** E-mail бухгалтерии */
  glavbuchEmail?: string;
  /** Телефон бухгалтерии */
  glavbuchPhone?: string;
  /** Телефон автоинформатора */
  autoinfoPhone?: string;
  /** Сайт */
  orgWww?: string;
  /** Наличие автоматизации системы продажи билетов */
  automatic?: boolean;
  /**
   * Id формы собственности
   * @format int64
   */
  idProp?: number;
  /**
   * Id формы управления
   * @format int64
   */
  mngmntformId?: number;
  /** Форма управления */
  mngmntformCaption?: string;
  /** Наличие оригинала регистрационной карты */
  originalDog?: boolean;
  /** Состояние */
  state?: string;
  /**
   * Код расположения
   * @format int64
   */
  location?: number;
  /** Комментарии */
  comments?: string;
  /** Паспорт */
  pasport?: string;
  /** Физ.лицо */
  physicPerson?: boolean;
  /**
   * Id Поставщика ПО
   * @format int64
   */
  idVnd?: number;
  /** @format int64 */
  closereasonId?: number;
  /**
   * Часовой пояс
   * @format int64
   */
  timeZone?: number;
  /** Наименование юридического лица */
  orgnameJur?: string;
  /** Адрес юридического лица */
  addressJur?: string;
  /** Имущественное состояние */
  stateMat?: string;
  /** Год субсидирования */
  subsidyear?: string;
  /** Зарегистрирован */
  registred?: boolean;
  /** Online */
  isonline?: boolean;
  /** Современный */
  modern?: boolean;
  /** Невыверенные данные: номер строки */
  recidIo?: string;
  /** Невыверенные данные: адрес */
  addressIo?: string;
  /** Невыверенные данные: название */
  orgnameIo?: string;
  /** Невыверенные данные: кол-во кинозалов */
  sroomcountIo?: string;
  /** Невыверенные данные: кол-во мест */
  placecountIo?: string;
  /** Невыверенные данные: общая площадь */
  ttlspaceIo?: string;
  /** Невыверенные данные: состояние */
  statematIo?: string;
  /** Невыверенные данные: оборудование */
  equipmentIo?: string;
  /** Невыверенные данные: год постройки */
  builtyearIo?: string;
  /** Невыверенные данные: примечание */
  noteIo?: string;
  /** Невыверенные данные: всего кинотеатров в населенном пункте */
  cinemacntnearIo?: string;
  /** Невыверенные данные: проэкт */
  projectIo?: string;
  /** Выверка */
  verstate?: string;
  /**
   * Кол-во кинозалов
   * @format int64
   */
  sroomCnt?: number;
  /**
   * Кол-во мест
   * @format int64
   */
  splaceCnt?: number;
  /**
   * Площадь (общ)
   * @format double
   */
  spaceTtl?: number;
  /** @format int64 */
  sroomCnt0?: number;
  /**
   * Допустимый период молчания [дней]
   * @format int64
   */
  silencePeriod?: number;
  /** Цифровой */
  dataisvalid?: string;
  /**
   * Репертуар
   * @format int64
   */
  repertId?: number;
  /**
   * Регулярность кинопоказа
   * @format int64
   */
  regularId?: number;
  /**
   * Дата регистрации в ЕАИС
   * @format date-time
   */
  regDate?: string;
  /** Закрыт оператором */
  operatorStateId?: boolean;
  /** Связанные организации */
  refOrgIds?: string;
}

/** Объект с данными о кинозале */
export interface ShowRoomData {
  /**
   * version_id
   * @format int64
   */
  versionId?: number;
  /**
   * showr_id
   * @format int64
   */
  showrId?: number;
  /**
   * org_id
   * @format int64
   */
  orgId?: number;
  /**
   * actdate
   * @format date-time
   */
  actdate?: string;
  /** sname */
  sname?: string;
  /**
   * places
   * @format int64
   */
  places?: number;
  /**
   * showrstat_id
   * @format int64
   */
  showrstatId?: number;
  /** state_name */
  stateName?: string;
  /**
   * showrstat_from
   * @format date-time
   */
  showrstatFrom?: string;
  /**
   * showrstat_to
   * @format date-time
   */
  showrstatTo?: string;
  /** state */
  state?: string;
  /**
   * lastdatadate
   * @format date-time
   */
  lastdatadate?: string;
  /** fksupported */
  fksupported?: boolean;
  /** npculture */
  npculture?: boolean;
  /** digital */
  digital?: boolean;
  /** autosroom */
  autosroom?: boolean;
  /**
   * srv_vendor
   * @format int64
   */
  srvVendor?: number;
  /** srv_model */
  srvModel?: string;
  /** srv_serno */
  srvSerno?: string;
  /**
   * prj_vendor
   * @format int64
   */
  prjVendor?: number;
  /** prj_model */
  prjModel?: string;
  /** prj_serno */
  prjSerno?: string;
  /**
   * aua_vendor
   * @format int64
   */
  auaVendor?: number;
  /** aua_model */
  auaModel?: string;
  /**
   * aud_vendor
   * @format int64
   */
  audVendor?: number;
  /** aud_model */
  audModel?: string;
  /** explaser */
  explaser?: boolean;
  /** exp_3d */
  exp3d?: boolean;
  /** exp_imax */
  expImax?: boolean;
  /** exp_4dx */
  exp4dx?: boolean;
  /** exp_dvd */
  expDvd?: boolean;
  /** exp_2dk1 */
  exp2dk1?: boolean;
  /** exp_2dk2 */
  exp2dk2?: boolean;
  /** exp_2dk4 */
  exp2dk4?: boolean;
  /** exp_type */
  expType?: boolean;
  /**
   * installdt
   * @format date-time
   */
  installdt?: string;
  /**
   * opendate
   * @format date-time
   */
  opendate?: string;
  /** seating_type */
  seatingType?: string;
  /** sofas */
  sofas?: string;
  /** subsyear */
  subsyear?: string;
}

/** Объект с данными о типе билета */
export interface TicketTypeDto {
  /**
   * ID
   * @format int64
   */
  idTicketType?: number;
  /** Название */
  aname?: string;
}

/** Объект с данными о поставщике ПО */
export interface SoftVendorDto {
  /**
   * ID
   * @format int64
   */
  idVnd?: number;
  /** Название */
  vndname?: string;
  /** Контакты */
  contacts?: string;
}

/** Объект с данными о формате показа */
export interface ShowFormatDto {
  /**
   * ID
   * @format int64
   */
  idShowFormat?: number;
  /** Название */
  aname?: string;
  /** anamenormal */
  anameNormal?: string;
  /**
   * fformat_id
   * @format int64
   */
  idFFormat?: number;
}

/** Объект с данными о ПУ */
export interface PuDto {
  /**
   * ID ПУ
   * @format int64
   */
  puId: number;
  /**
   * film_id
   * @format int64
   */
  filmId?: number;
  /** Номер ПУ */
  puNum: string;
  /**
   * Начало ПУ
   * @format date-time
   */
  issued: string;
  /** Категория */
  filmCategory: string;
  /** Категория проката */
  rentCategory: string;
  /**
   * Окончание ПУ
   * @format date-time
   */
  rentEnd: string;
  /** Описание */
  rentDesc: string;
  /** Правообладатели */
  distributors: string;
  /** Владельцы */
  owners: string;
  /** contr_num */
  contrNum?: string;
  /**
   * contr_date
   * @format date-time
   */
  contrDate?: string;
  /**
   * Дата заполнения
   * @format date-time
   */
  creDate: string;
  /** Название фильма */
  rentName: string;
  /** Название фильма (en) */
  nameOrig: string;
  /** Страна производства (en) */
  madeinOrig: string;
  /** Язык оригинала */
  langOrig: string;
  /** Год выпуска */
  prodYear: string;
  /** Страна производства */
  madein: string;
  /** Студия */
  studia: string;
  /** Жанр */
  genre: string;
  /**
   * age_restr
   * @format int64
   */
  ageRestr?: number;
  /** Ограничения */
  viewRestr: string;
  /** Продюсеры (по ПУ) */
  producer: string;
  /** Сценартсты */
  scrwriters: string;
  /** Режиссеры (по ПУ) */
  director: string;
  /** Композиторы */
  composer: string;
  /** Операторы */
  operator: string;
  /** Художники */
  artist: string;
  /** Описание ПУ */
  puDesc: string;
  /** editable */
  editable?: boolean;
  /** pu_num_perm */
  puNumPerm?: string;
  /**
   * date_from_perm
   * @format date-time
   */
  dateFromPerm?: string;
  /**
   * date_to_perm
   * @format date-time
   */
  dateToPerm?: string;
  /**
   * Дата релиза
   * @format date-time
   */
  startdate?: string;
  /** Дистрибьюторы */
  distribs: string;
  /** distrib_ids */
  distribIds?: string;
  /** Опубликован на сайте МКРФ */
  siteCheck?: boolean;
  /** Продолжительность */
  fduration: string;
  /**
   * Продолжительность (мин)
   * @format int64
   */
  mduration: number;
  /**
   * Кол-во серий
   * @format int64
   */
  sernum: number;
  /**
   * pogu_id
   * @format int64
   */
  poguId?: number;
  /** Удален */
  deleted: boolean;
  /**
   * Дата удаления
   * @format date-time
   */
  deletedDate: string;
  /** Примечания */
  notetxt: string;
  /**
   * prefrom
   * @format date-time
   */
  prefrom?: string;
  /**
   * preto
   * @format date-time
   */
  preto?: string;
  /** МКРФ: Название фильма (англ) */
  nameReadonly?: string;
  /** Жанры (ФК) */
  genres?: string;
  /** УНФ */
  unfNumber?: string;
  /** IMDb */
  imdbId?: string;
  /** ПУ(Казахстан) */
  puNumKz?: string;
  /** Продюсеры (по УНФ) */
  unfProducer?: string;
  /** Длительность фильма(по УНФ) */
  unfDuration?: string;
  /**
   * Дата обновления данных из УНФ
   * @format date-time
   */
  unfProducerUpd?: string;
}

/** Объект с данными о дате релиза и дате превью для ПУ */
export interface PuReleaseDateDto {
  /**
   * pu_id
   * @format int64
   */
  puId?: number;
  /**
   * startdate
   * @format date-time
   */
  startdate?: string;
  /**
   * prefrom
   * @format date-time
   */
  prefrom?: string;
}

/** Объект с данными о прокатчиках для ПУ */
export interface PuDistrbDto {
  /**
   * pu_id
   * @format int64
   */
  puId?: number;
  /** distrib_ids */
  dbDistribIds?: string;
  /** distribIds */
  distribIds?: string[];
}

/** Объект с данными о причине отсутствия ПУ */
export interface PuReasonDto {
  /**
   * ID
   * @format int64
   */
  idPuReason?: number;
  /** Название */
  aname?: string;
}

/** Объект с данными о форме собственности */
export interface OwnershipDto {
  /**
   * ID
   * @format int64
   */
  idOwnership?: number;
  /** Название */
  prop?: string;
  /** Расшифровка */
  adesc?: string;
}

/** Объект с данными о будущем релизе */
export interface FutureReleaseDto {
  /**
   * Код
   * @format int64
   */
  code?: number;
  /** Название */
  nameRus?: string;
  /**
   * Дата
   * @format date-time
   */
  startdate?: string;
  /** ПУ */
  puNum?: string;
  /** Title */
  nameEn?: string;
  /** Дистрибьютор */
  distrib?: string;
  /** Жанр */
  genre?: string;
  /**
   * Премьера в США
   * @format date-time
   */
  startdateEn?: string;
  /** Примечание */
  comments?: string;
  /** Удалено */
  isdeleted?: string;
  /** Страна производитель */
  madein?: string;
  /** Страна производитель (англ) */
  madeinEn?: string;
}

/** Объект с данными о фильме */
export interface FilmDto {
  /**
   * ID
   * @format int64
   */
  filmId?: number;
  /** Название фильма */
  filmName: string;
  /** Год выпуска */
  prodYear: string;
  /** Страна */
  madein: string;
  /** Студия */
  studia: string;
  /** editable */
  editable?: boolean;
  /** Жанр */
  genre?: string;
  /** Номер бюлетеня */
  bulletin?: string;
  /** Дубляж */
  dubbing?: string;
  /** Категория */
  filmCategory?: string;
  /** Язык оригинала */
  langOrig?: string;
  /** Оригинальное название */
  nameOrig?: string;
  /** Формат */
  frmt?: string;
  /** Количество серий */
  sernum?: string;
  /** Цветной/Чернобелый */
  colornot?: string;
  /** Количество частей */
  partnum?: string;
  /** Метраж (метров) */
  typeLength?: string;
  /** Ограничение по возрасту */
  ageRestr?: string;
  /** Длительность (часов) */
  durHours?: string;
  /** Длительность (минут) */
  durMins?: string;
  /** Ограничения на просмотр */
  viewRestr?: string;
  /** Продюссер */
  mproducer?: string;
  /** Сценаристы */
  mscrwriters?: string;
  /** Режисер */
  mdirector?: string;
  /** Композитор */
  mcomposer?: string;
  /** Оператор */
  moperator?: string;
  /** Художник */
  martist?: string;
  /** Примечание */
  notetxt?: string;
  /** Аннотация */
  annotxt?: string;
  /** Запись удалена */
  deleted?: boolean;
}

/** Объект с данными о поставщике оборудования */
export interface EqpVendorDto {
  /**
   * ID
   * @format int64
   */
  idEqpVendor?: number;
  /** Название */
  aname?: string;
  /** Описание */
  adesc?: string;
}

/** Объект с данными о поставщике ПО */
export interface EqpTypeDto {
  /**
   * ID
   * @format int64
   */
  idEqpType?: number;
  /** Название */
  eqpTypeName?: string;
}

/** Объект с данными о прокатчике */
export interface DistribDto {
  /**
   * ID прокатчика
   * @format int64
   */
  distribId?: number;
  /** Код прокатчика */
  acode: string;
  /** Наименование прокатчика */
  aname: string;
  /** Наименование прокатчика (eng) */
  anameEn?: string;
  /** Описание прокатчика */
  adesc?: string;
  /** Телефон */
  phones?: string;
  /** Адрес */
  postaddr?: string;
  /** Web-адрес */
  webaddr?: string;
  /** Email */
  email?: string;
  /** Контактное лицо */
  rspperson?: string;
}

/** Объект с данными о населении городов */
export interface CityPopulationDto {
  /** Наименование */
  tkldrName?: string;
  /**
   * Площадь региона
   * @format int64
   */
  regPlace?: number;
  /**
   * Дата актуализации
   * @format date-time
   */
  actdate?: string;
  /**
   * Население(2016)
   * @format int64
   */
  peopleCnt16?: number;
  /**
   * Население(2017)
   * @format int64
   */
  peopleCnt17?: number;
  /**
   * Население(2018)
   * @format int64
   */
  peopleCnt18?: number;
  /**
   * Население(2019)
   * @format int64
   */
  peopleCnt19?: number;
}

/** Объект с идентификационными данными */
export interface IdentificationUserData {
  /** Токен приложения. Его можно получить при регистрации приложения (см /regapp). */
  apptoken?: string;
  /** Имя пользователя */
  username?: string;
  /** Пароль пользователя */
  password?: string;
}

export interface LoginResult {
  success?: boolean;
  exception?: {
    cause?: {
      stackTrace?: {
        classLoaderName?: string;
        moduleName?: string;
        moduleVersion?: string;
        methodName?: string;
        fileName?: string;
        /** @format int32 */
        lineNumber?: number;
        nativeMethod?: boolean;
        className?: string;
      }[];
      message?: string;
      suppressed?: {
        stackTrace?: {
          classLoaderName?: string;
          moduleName?: string;
          moduleVersion?: string;
          methodName?: string;
          fileName?: string;
          /** @format int32 */
          lineNumber?: number;
          nativeMethod?: boolean;
          className?: string;
        }[];
        message?: string;
        localizedMessage?: string;
      }[];
      localizedMessage?: string;
    };
    stackTrace?: {
      classLoaderName?: string;
      moduleName?: string;
      moduleVersion?: string;
      methodName?: string;
      fileName?: string;
      /** @format int32 */
      lineNumber?: number;
      nativeMethod?: boolean;
      className?: string;
    }[];
    message?: string;
    suppressed?: {
      stackTrace?: {
        classLoaderName?: string;
        moduleName?: string;
        moduleVersion?: string;
        methodName?: string;
        fileName?: string;
        /** @format int32 */
        lineNumber?: number;
        nativeMethod?: boolean;
        className?: string;
      }[];
      message?: string;
      localizedMessage?: string;
    }[];
    localizedMessage?: string;
  };
  user?: SsoUser;
}

export interface SsoUser {
  /** Внутренний идентификатор пользователя */
  innerUid?: string;
  /** Токен безопасности. Передавать в заголовок "X-SToken" для всех запросов */
  stoken?: string;
  /**
   * Дата/время когда истекает срокдействия токена безопасности
   * @format date-time
   */
  stokenExpire?: string;
  /** Токен обновления. Используется для обновления токена безопасности */
  refreshToken?: string;
  /** Логин пользователя (уникальное имя пользователя, которое используется при входе в систему) */
  login?: string;
  /** ФИО пользователя */
  fio?: string;
  /** Email пользователя */
  email?: string;
  /** Контактная информация пользователя */
  phone?: string;
  /** ID организации к которой относится пользователь */
  orgId?: string;
  /** Название организации к которой относится пользователь */
  orgName?: string;
  /** Описание организации к которой относится пользователь */
  orgDesc?: string;
  /** ID вышестоящей организации по отношению к организации, к которой относится пользователь */
  parentOrgId?: string;
  /** ID дочерних организаций по отношению к организации, к которой относится пользователь (разделитель ",") */
  childOrgIds?: string;
  /** ID организаций, к которым пользователь имеет доступ (разделитель ","). Если пользователь имеет доступ к нескольким киносетям, то будут перечислены все киносети и кинотеатры, которые в них входят */
  accessOrgIds?: string;
  /** ID организаций, к которым пользователь имеет отношение (разделитель ","), см. таблицу GIVCADMIN.USR2ORG */
  refsOrgIds?: string;
  /** Список ролей пользователя (разделитель ",") */
  roles?: string;
  /** Список разрешений пользователя (разделитель ",") */
  grants?: string;
  /** IP адрес пользователя */
  remoteIP?: string;
  /** Описание приложения пользователя */
  remoteClient?: string;
  /** true - анонимный пользователь */
  anonymouse?: boolean;
  /** Уникальный идентификатор устройства пользователя */
  deviceuuid?: string;
  /** true - пуш-уведомления включены */
  pushenabled?: boolean;
  /** пуш-токен */
  pushtoken?: string;
  name?: string;
  "@class": string;
}

/** Объект с идентификационными данными */
export interface IdentificationGuestData {
  /** Токен приложения. Его можно получить при регистрации приложения (см /regapp). */
  apptoken?: string;
  /** UUID устройства */
  deviceuuid?: string;
}

/** Объект с данными о примечании о кинотеатре */
export interface NoteListItem {
  /**
   * ID
   * @format int64
   */
  orgnoteId?: number;
  /**
   * ID кинотеатра
   * @format int64
   */
  orgId?: number;
  /** UID пользователя-автора */
  usrUid?: string;
  /**
   * Дата/время создания
   * @format date-time
   */
  credate?: string;
  /**
   * Дата события
   * @format date-time
   */
  evedate?: string;
  /** Описание события */
  anote?: string;
}

/** Список идентификаторов выбранных сеансов */
export interface FilmsRegSessIdsBody {
  /**
   * Список идентификаторов сеансов
   * @example "Формат идентификатора <part_key>-<sess_id>-<sesstitle_uid>"
   */
  puRegIds: string[];
}

export interface SimpleResult {
  success?: boolean;
  exception?: {
    cause?: {
      stackTrace?: {
        classLoaderName?: string;
        moduleName?: string;
        moduleVersion?: string;
        methodName?: string;
        fileName?: string;
        /** @format int32 */
        lineNumber?: number;
        nativeMethod?: boolean;
        className?: string;
      }[];
      message?: string;
      suppressed?: {
        stackTrace?: {
          classLoaderName?: string;
          moduleName?: string;
          moduleVersion?: string;
          methodName?: string;
          fileName?: string;
          /** @format int32 */
          lineNumber?: number;
          nativeMethod?: boolean;
          className?: string;
        }[];
        message?: string;
        localizedMessage?: string;
      }[];
      localizedMessage?: string;
    };
    stackTrace?: {
      classLoaderName?: string;
      moduleName?: string;
      moduleVersion?: string;
      methodName?: string;
      fileName?: string;
      /** @format int32 */
      lineNumber?: number;
      nativeMethod?: boolean;
      className?: string;
    }[];
    message?: string;
    suppressed?: {
      stackTrace?: {
        classLoaderName?: string;
        moduleName?: string;
        moduleVersion?: string;
        methodName?: string;
        fileName?: string;
        /** @format int32 */
        lineNumber?: number;
        nativeMethod?: boolean;
        className?: string;
      }[];
      message?: string;
      localizedMessage?: string;
    }[];
    localizedMessage?: string;
  };
  user?: SsoUser;
}

/**
 * Метаданные объекта data
 * @example "..."
 */
export interface Field {
  /** @format int32 */
  id?: number;
  name?: string;
  attrName?: string;
  format?: string;
  align?: "LEFT" | "CENTER" | "RIGHT" | "STRETCH";
  title?: string;
  dtoDocumentation?: string;
  showTooltip?: boolean;
  hidden?: boolean;
  dtoSkip?: boolean;
  dtoJsonIgnore?: boolean;
  dtoApiHidden?: boolean;
  dtoAsList?: boolean;
  filter?: boolean;
  readonly?: boolean;
  mandatory?: boolean;
  pk?: boolean;
  useNull?: boolean;
  width?: string;
  defaultVal?: object;
  sort?: boolean;
  sorter?: string;
  nullsPosition?: "DEFAULT" | "NULLLAST" | "NULLFIRST";
  tooltip?: string;
  metaType?: "UNDEFINED" | "STRING" | "INTEGER" | "DECIMAL" | "DATE" | "BOOLEAN" | "BLOB" | "CLOB" | "CURSOR";
  expEnabled?: boolean;
  expFormat?: string;
  expWidth?: string;
  textLocality?: "UNDEFINED" | "DEFAULT" | "RUSSIAN";
  aggregate?: "UNDEFINED" | "COUNT" | "SUM" | "AVG" | "MAX" | "MIN";
  looCaption?: boolean;
  /** @format int32 */
  editMaxLength?: number;
  editor?: boolean;
  looReference?: string;
  fixed?: "LEFT" | "RIGHT" | "NONE";
  /** @format int32 */
  index?: number;
}

/**
 * Примененные фильты
 * @example "..."
 */
export interface ListCommonResponseFilters {
  filterName?: string;
  filterValue?: string;
}

/**
 * Данные
 * @example "..."
 */
export interface RegInfoDto {
  /**
   * ID организации владельца
   * @format int64
   */
  ownerOrgId?: number;
  /**
   * ID организации получателя
   * @format int64
   */
  orgId?: number;
  /** Доступ предоставлен */
  isshared2?: boolean;
  isshared2sel?: boolean;
  /** Доступ предоставлен всем */
  isshared2all?: boolean;
  /** Название организации */
  orgname?: string;
  /** E-mail */
  email?: string;
  /** Тест */
  test?: boolean;
  /** Ответственное лицо */
  responsPerson?: string;
  /**
   * Зарегистрирован
   * @format date-time
   */
  regDate?: string;
  /** Примечание */
  comments?: string;
}

export interface RegInfoListResponse {
  /**
   * Данные
   * @example "..."
   */
  data: RegInfoDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

/**
 * Свойство поля элемента справочника
 * @example "..."
 */
export interface MetadataPropertyDto {
  /** Уникальное имя поля */
  name?: string;
  /**
   * Уникальное имя атрибута
   * @example "attrName"
   */
  attrName?: string;
  /**
   * Тип данных поля
   * @example "integer"
   */
  type?: string;
  /**
   * Заголовок поля
   * @example "Номер ПУ"
   */
  title?: string;
  /**
   * Только для чтения
   * @example true
   */
  readOnly?: boolean;
  /**
   * Обязательный параметр
   * @example true
   */
  mandatory: boolean;
  /**
   * Максимальное число символов, которое может быть введено пользователем при редактировании поля
   * @format int32
   * @example 10
   */
  maxLength?: number;
  /**
   * Возможна ли фильтрация по данному полю
   * @example true
   */
  filterable: boolean;
  /**
   * Возможна ли сортировка по данному полю
   * @example true
   */
  sortable: boolean;
  /**
   * Показывать поле в общем списке данных (таблице)
   * @example true
   */
  showInList?: boolean;
  /**
   * Порядок отображения поля в общем списке
   * @format int32
   * @example 10
   */
  sortOrder?: number;
  /**
   * Ширина поля
   * @format int32
   * @example 10
   */
  width?: number;
  /**
   * Формат поля (аналогично атрибуту из xsd)
   * @example "Номер ПУ"
   */
  format?: string;
  /**
   * Показывать поле в редакторе
   * @example true
   */
  showInEditor?: boolean;
  /**
   * Ссылка на справочник (имя справочника)
   * @example "ref"
   */
  referenceNsi?: string;
  /**
   * Фиксированнное положение колонки слева или справа при горизонтальной прокрутке
   * @example "NONE"
   */
  fixed?: "LEFT,RIGHT,NONE";
  /**
   * Выравнивание содержимого колонки
   * @example "LEFT"
   */
  alignment?: "LEFT,CENTER,RIGHT,STRETCH";
  primary?: boolean;
}

/** Метаданные справочника */
export interface MetadataResponse {
  /**
   * ID справочника
   * @format int64
   * @example 1
   */
  id: number;
  /**
   * Метаданные справочника
   * @example "..."
   */
  props: MetadataPropertyDto[];
}

export interface OrgsVerificationState {
  value?: string;
  name?: string;
}

/**
 * Данные
 * @example "..."
 */
export type OrgsUsrLogDto = object;

export interface OrgsUsrLogResponse {
  /**
   * Данные
   * @example "..."
   */
  data: OrgsUsrLogDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface OrgsUserRole {
  value?: string;
  name?: string;
}

export interface OrgsTimeZone {
  /** @format int64 */
  value?: number;
  name?: string;
}

/**
 * Данные
 * @example "..."
 */
export interface StatsLoadLog {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** part_key */
  partKey?: string;
  /**
   * Дата/Время регистрации
   * @format date-time
   */
  dateIncoming?: string;
  /**
   * ID Отправителя
   * @format int64
   */
  orgId?: number;
  /**
   * ID Киносети
   * @format int64
   */
  sessPrntOrgId?: number;
  /**
   * ID Кинотеатра
   * @format int64
   */
  sessOrgId?: number;
  /**
   * Часовой пояс
   * @format int64
   */
  timeZone?: number;
  /** Имя файла */
  packetName?: string;
  /** Имя zip-пакета */
  zipName?: string;
  /** Адрес клиента */
  ip?: string;
  /** is_loaded */
  isLoaded?: boolean;
  /**
   * cur_pstate0
   * @format int64
   */
  curPstate0?: number;
  /** Состояние */
  curPstate?: string;
  /** Последнее сообщение */
  lastPstateMsg?: string;
  /**
   * Дата/Время обработки
   * @format date-time
   */
  dateProcessing?: string;
  /** Ответ получен */
  isLogDownloaded?: boolean;
  /** Метод загрузки */
  loadMethod?: string;
  /** Тестовый */
  test?: string;
  /**
   * Дата/Время сеанса
   * @format date-time
   */
  showDate?: string;
  /** tcktsdeleted */
  tcktsdeleted?: boolean;
}

export interface StatsLoadLogListResponse {
  /**
   * Данные
   * @example "..."
   */
  data: StatsLoadLog[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

/**
 * Данные
 * @example "..."
 */
export interface StatsFPacketStat {
  /**
   * ID пакета
   * @format int64
   */
  packetlistId?: number;
  /** Пакет */
  packetlistName?: string;
  /** request_type */
  requestType?: string;
  /** Типа запроса */
  requestTypeName?: string;
  /**
   * Дата регистрации
   * @format date-time
   */
  registred?: string;
  /** Описание состояния */
  status?: string;
  /**
   * curpstate
   * @format int64
   */
  curpstate?: number;
  /**
   * ID кинотеатра
   * @format int64
   */
  orgId?: number;
  /** Название кинотеатра */
  orgName?: string;
  /**
   * ID киносети
   * @format int64
   */
  prntOrgId?: number;
  /** Название киносети */
  prntOrgName?: string;
}

export interface StatsFPacketStatListResponse {
  /**
   * Данные
   * @example "..."
   */
  data: StatsFPacketStat[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface OrgsStatsFPacket {
  /**
   * ID запроса
   * @format int64
   */
  request_id?: number;
  /** Дата регистрации */
  registred?: string;
  /**
   * Тип запроса
   * @format int64
   */
  request_type?: number;
  /** Описание типа запроса */
  request_type_name?: string;
  /**
   * Состояние
   * @format int64
   */
  cur_pstate?: number;
  /** Описание состояния */
  cur_pstate_msg?: string;
  /** Имя пакета */
  packet_name?: string;
  /** Имя zip-пакета */
  zip_name?: string;
  /** Дата/время сеанса */
  packet_showdate?: string;
  /**
   * ID списка на удаление
   * @format int64
   */
  packetlist_id?: number;
  /** Список на удаление/восстановление */
  packetlist_name?: string;
  /** Ссылка на родительский запрос */
  prnt_request_id?: string;
  /**
   * ID пакета
   * @format int64
   */
  packet_id?: number;
  /**
   * ID кинотеатра пакета
   * @format int64
   */
  packet_org_id?: number;
  /** Название кинотеатра */
  packet_org_name?: string;
  /**
   * ID киносети
   * @format int64
   */
  holding_id?: number;
  /** Название киносети */
  holding_name?: string;
  /** UID пользователя */
  usr_uid?: string;
  /** Email пользователя */
  usr_email?: string;
  /** ФИО пользователя */
  usr_fio?: string;
  /** IP адрем пользователя */
  usr_ip_addr?: string;
  /** Изменено пакетов */
  affected_packs?: string;
  part_key?: string;
}

export interface OrgsStatsFPacketDataZip {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** part_key */
  part_key?: string;
  /** Дата/Время регистрации */
  date_incoming?: string;
  /**
   * ID Отправителя
   * @format int64
   */
  org_id?: number;
  /**
   * ID Киносети
   * @format int64
   */
  sess_prnt_org_id?: number;
  /**
   * ID Кинотеатра
   * @format int64
   */
  sess_org_id?: number;
  /**
   * Часовой пояс
   * @format int64
   */
  time_zone?: number;
  /** Имя файла */
  packet_name?: string;
  /** Имя zip-пакета */
  zip_name?: string;
  /** Адрес клиента */
  ip?: string;
  /** is_loaded */
  is_loaded?: boolean;
  /**
   * cur_pstate0
   * @format int64
   */
  cur_pstate0?: number;
  /** Состояние */
  cur_pstate?: string;
  /** Последнее сообшение */
  last_pstate_msg?: string;
  /** Дата/Время обработки */
  date_processing?: string;
  /** Ответ получен */
  is_log_downloaded?: boolean;
  /** Метод загрузки */
  load_method?: string;
  /** Тестовый */
  test?: string;
  /** Дата/Время сеанса */
  show_date?: string;
  /** tcktsdeleted */
  tcktsdeleted?: boolean;
}

export interface OrgsStatsFPacketDataXml {
  /**
   * rec_id
   * @format int64
   */
  rec_id?: number;
  /** part_key */
  part_key?: string;
  /**
   * sess_id
   * @format int64
   */
  sess_id?: number;
  /**
   * packet_id
   * @format int64
   */
  packet_id?: number;
  /** sesstitle_uid */
  sesstitle_uid?: string;
  /** - */
  col0?: string;
  /** Кинозал */
  showroom?: string;
  /** Дата/Время продажи */
  sale_date?: string;
  /** Сеанс */
  sess_title?: string;
  /** Фильм (по реестру) */
  film_name_orig?: string;
  /** pu_num */
  pu_num?: string;
  /** pu_num_found */
  pu_num_found?: string;
  /** sr_row */
  sr_row?: string;
  /** Место */
  sr_col?: string;
  /** Секция */
  sr_section?: string;
  /** Тип */
  tcktype_name?: string;
  /** Цена, руб */
  ticket_price0?: string;
  /** Скидка, руб */
  discount0?: string;
  /** Цена, руб */
  ticket_price?: string;
  /** Скидка, руб */
  discount?: string;
  /** loaded */
  loaded?: string;
  /** Имя пакета */
  packet_name?: string;
  /** Дата/время удаления */
  del_date?: string;
  /** Кто удалил */
  del_user?: string;
  /** tstatus */
  tstatus?: string;
  /** deleted */
  deleted?: string;
  /** iserror */
  iserror?: boolean;
  /**
   * grp_id
   * @format int64
   */
  grp_id?: number;
}

/**
 * Данные
 * @example "..."
 */
export interface StatsByWeek {
  /** Регион */
  regionRev?: string;
  /** Нас. пункт */
  nasPunktRev?: string;
  /**
   * ID киносети
   * @format int64
   */
  holdingId?: number;
  /** Киносеть */
  holding?: string;
  /**
   * ID кинотеатра
   * @format int64
   */
  orgId?: number;
  /** Кинотеатр */
  orgName?: string;
  /**
   * Часовой пояс
   * @format int64
   */
  timeZone?: number;
  /** Произв. ПО */
  vndName?: string;
  /** Произв. ПО (контакты) */
  vndContacts?: string;
  /**
   * файлов
   * @format int64
   */
  ds0?: number;
  /**
   * ошибок
   * @format int64
   */
  es0?: number;
  /**
   * файлов
   * @format int64
   */
  ds1?: number;
  /**
   * ошибок
   * @format int64
   */
  es1?: number;
  /**
   * файлов
   * @format int64
   */
  ds2?: number;
  /**
   * ошибок
   * @format int64
   */
  es2?: number;
  /**
   * файлов
   * @format int64
   */
  ds3?: number;
  /**
   * ошибок
   * @format int64
   */
  es3?: number;
  /**
   * файлов
   * @format int64
   */
  ds4?: number;
  /**
   * ошибок
   * @format int64
   */
  es4?: number;
  /**
   * файлов
   * @format int64
   */
  ds5?: number;
  /**
   * ошибок
   * @format int64
   */
  es5?: number;
  /**
   * файлов
   * @format int64
   */
  ds6?: number;
  /**
   * ошибок
   * @format int64
   */
  es6?: number;
}

export interface StatsByWeekListResponse {
  /**
   * Данные
   * @example "..."
   */
  data: StatsByWeek[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface OrgsStateMat {
  value?: string;
  name?: string;
}

export interface OrgsShowRoomState {
  /** @format int64 */
  state?: number;
  statename?: string;
}

export interface OrgsFilmPermissionListResponse {
  /**
   * Данные
   * @example "..."
   */
  data: FilmPermissionListData[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface OrgsRptUserListResponse {
  /**
   * Данные
   * @example "..."
   */
  data: RptUserListData[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

/**
 * Данные
 * @example "..."
 */
export interface RptUserListData {
  /**
   * ID
   * @format int64
   */
  idOrg?: number;
  /** Наименование */
  orgname?: string;
  /** Краткое наименование */
  orgnamshrt?: string;
  /** Форма собственности */
  owntype?: string;
  /** email */
  email?: string;
  /** Контакт */
  responsPerson?: string;
  /** Телефоны */
  phoneFax?: string;
  /** ИНН */
  inn?: string;
  /** ОГРН */
  ogrn?: string;
  /** Паспорт */
  pasport?: string;
  /** Физ. лицо */
  physicPerson?: boolean;
  /** Страна */
  nationName?: string;
  /**
   * ID Страны
   * @format int64
   */
  nationId?: number;
  /** usr_uid */
  usrUid?: string;
}

export interface OrgsRepert {
  /** @format int64 */
  repert_id?: number;
  aname?: string;
}

export interface OrgsRegular {
  /** @format int64 */
  regular_id?: number;
  aname?: string;
}

export interface OrgsMngmntForm {
  /** @format int64 */
  mngmntform_id?: number;
  mngmntform_caption?: string;
}

export interface OrgsLocation {
  /** @format int64 */
  location?: number;
  locname?: string;
}

/**
 * Данные
 * @example "..."
 */
export interface CinemaListData {
  /** Кинотеатр */
  orgname: string;
  /**
   * ID
   * @format int64
   */
  idOrg?: number;
  /** Тип */
  orgtypeName?: string;
  /**
   * Часовой пояс
   * @format int64
   */
  timeZone?: number;
  /** Ф/С */
  ownership?: string;
  /**
   * ID Киносети
   * @format int64
   */
  holdingId?: number;
  /** Киносеть */
  hldname?: string;
  /** Регион */
  region?: string;
  /** Нас. пункт */
  nasPunkt?: string;
  /**
   * Кол-во жителей
   * @format int64
   */
  peopleCnt?: number;
  /** Улица,Дом */
  streetName?: string;
  /** E-mail */
  email?: string;
  /** E-mail киносети */
  emailHld?: string;
  /** Билетная система */
  automatic?: boolean;
  /** Современный */
  modern?: boolean;
  /** Online */
  isonline?: boolean;
  /** Рег. карта */
  originalDog?: boolean;
  /** Отчитывается */
  isreported?: boolean;
  /** Цифровой */
  dataisvalidStr?: string;
  /** Молчит 7 дней */
  whereisdata?: boolean;
  /**
   * Поледняя загрузка
   * @format date-time
   */
  lastUpld?: string;
  /** Тестовый */
  test?: boolean;
  /** Зарегистрирован */
  registred?: boolean;
  /** liquidate */
  liquidate?: boolean;
  /** Рег. номер */
  dogNum?: string;
  /**
   * Дата регистрации
   * @format date-time
   */
  dogDate?: string;
  /**
   * Дата ввода
   * @format date-time
   */
  regDate?: string;
  /** Размещение */
  locname?: string;
  /**
   * state
   * @format int64
   */
  state?: number;
  /** Состояние */
  statename?: string;
  /**
   * Дата состояния
   * @format date-time
   */
  stateDate?: string;
  /**
   * closereason_id
   * @format int64
   */
  closereasonId?: number;
  /** Прим. к состоянию */
  closereasonName?: string;
  /** Закрыт оператором */
  operatorStateId?: boolean;
  /** Ответственное лицо */
  responsPerson?: string;
  /** Телефон/факс */
  phoneFax?: string;
  /** 2D-1K */
  idK1?: boolean;
  /** 2D-2K */
  idK2?: boolean;
  /** 2D-4K */
  idK4?: boolean;
  /** 3D */
  id3d?: boolean;
  /** IMAX */
  imax?: boolean;
  /** Пленка */
  idPlenka?: boolean;
  /** Аналог. звук */
  analogsnd?: boolean;
  /** Цифровой звук */
  digitsnd?: boolean;
  /** Поставщик ПО */
  vndname?: string;
  /** Наименование юр. лица */
  orgnameJur?: string;
  /**
   * Приостановлен до
   * @format date-time
   */
  suspended?: string;
  /** Состояние выверки */
  verstatename?: string;
  /**
   * Кинозалов всего
   * @format int64
   */
  sroomCnt?: number;
  /**
   * Мест всего
   * @format int64
   */
  splaceCnt?: number;
  /** Площадь общая */
  spaceTtl?: number;
  /**
   * Строка в исх. файле
   * @format int64
   */
  recidIo?: number;
  /**
   * Допустимый период молчания
   * @format int64
   */
  silencePeriod?: number;
  /** ИНН */
  inn?: string;
  /** mngmntform_id */
  mngmntformId?: string;
  /** Форма управления */
  mngmntformCaption?: string;
  /** Год субсидирования */
  subsidyear?: string;
  /** Страна */
  nation_name?: string;
  /**
   * ID Страны
   * @format int64
   */
  nationId?: number;
  /** Поддержан ФК */
  fksupported?: boolean;
  /** НП Культура */
  npculture?: boolean;
  /**
   * Автокинозалов
   * @format int64
   */
  autosroomCnt?: number;
}

export interface CinemaListResponse {
  /**
   * Данные
   * @example "..."
   */
  data: CinemaListData[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

/**
 * Данные
 * @example "..."
 */
export interface HoldingListData {
  /**
   * ID
   * @format int64
   */
  idOrg?: number;
  /** Киносеть */
  orgname?: string;
  /** Регион */
  region?: string;
  /** Нас. пункт */
  nasPunkt?: string;
  /** Улица */
  streetName?: string;
  /** Тип */
  orgtype?: string;
  /** Тип */
  orgtypeName?: string;
  /** Поставщик ПО */
  vndname?: string;
  /** E-mail */
  email?: string;
  /** Тестовый */
  test?: boolean;
  /** Зарегистрирован */
  registred?: boolean;
  /** Состояние */
  stateName?: string;
  /**
   * state
   * @format int64
   */
  state?: number;
  /** Страна */
  nationName?: string;
  /**
   * ID Страны
   * @format int64
   */
  nationId?: number;
}

export interface HoldingListResponse {
  /**
   * Данные
   * @example "..."
   */
  data: HoldingListData[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface OrgsDataIsValidItem {
  value?: string;
  name?: string;
}

/**
 * Данные
 * @example "..."
 */
export interface ShowRoomListItem {
  /**
   * ID зала
   * @format int64
   */
  showrId?: number;
  /**
   * org_id
   * @format int64
   */
  orgId?: number;
  /**
   * Действует с
   * @format date-time
   */
  actdate?: string;
  /** Название */
  sname?: string;
  /**
   * Мест
   * @format int64
   */
  places?: number;
  /**
   * Состояние
   * @format int64
   */
  showrstatId?: number;
  /** Состояние */
  stateName?: string;
  /**
   * Дата начала состояния
   * @format date-time
   */
  showrstatFrom?: string;
  /**
   * Дата окончания состояния
   * @format date-time
   */
  showrstatTo?: string;
  /** state */
  state?: string;
  /**
   * Дата последней загрузки
   * @format date-time
   */
  lastdatadate?: string;
  /** Поддержан ФК */
  fksupported?: boolean;
  /** НП Культура */
  npculture?: boolean;
  /** Год поддержки */
  subsyear?: string;
  /** Цифровой */
  digital?: boolean;
  /** Автокинозал */
  autosroom?: boolean;
}

export interface ShowRoomsResponse {
  /**
   * Данные
   * @example "..."
   */
  data: ShowRoomListItem[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface NotesResponse {
  /**
   * Данные
   * @example "..."
   */
  data: NoteListItem[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

/**
 * Данные
 * @example "..."
 */
export interface EqpmntVideo {
  /**
   * Действует с
   * @format date-time
   */
  actdate?: string;
  /** Название */
  sname?: string;
  /** Производитель сервера */
  srvVendorName?: string;
  /** Модель сервера */
  srvModel?: string;
  /** Серийный номер сервера */
  srvSerno?: string;
  /** Производитель проектора */
  prjVendorName?: string;
  /** Модель проектора */
  prjModel?: string;
  /** Серийный номер проектора */
  prjSerno?: string;
  /** LASER */
  explaser?: boolean;
  /** 3D */
  exp3d?: boolean;
  /** IMAX */
  expImax?: boolean;
  /** 4DX */
  exp4dx?: boolean;
  /** DVD */
  expDvd?: boolean;
  /** 2DK1 */
  exp2dk1?: boolean;
  /** 2DK2 */
  exp2dk2?: boolean;
  /** 2DK3 */
  exp2dk4?: boolean;
  /** Пленка */
  expType?: boolean;
  /**
   * Дата установки
   * @format date-time
   */
  installdt?: string;
}

export interface EqpmntVideoResponse {
  /**
   * Данные
   * @example "..."
   */
  data: EqpmntVideo[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

/**
 * Данные
 * @example "..."
 */
export interface EqpmntAudio {
  /**
   * ID зала
   * @format int64
   */
  showrId?: number;
  /**
   * ID кинотеатра
   * @format int64
   */
  orgId?: number;
  /**
   * Действует с
   * @format date-time
   */
  actdate?: string;
  /** Название */
  sname?: string;
  /**
   * aua_vendor
   * @format int64
   */
  auaVendor?: number;
  /** Производитель (аналоговое) */
  auaVendorName?: string;
  /** Модель (аналоговое) */
  auaModel?: string;
  /**
   * aud_vendor
   * @format int64
   */
  audVendor?: number;
  /** Производитель (цифровое) */
  audVendorName?: string;
  /** Модель (цифровое) */
  audModel?: string;
}

export interface EqpmntAudioResponse {
  /**
   * Данные
   * @example "..."
   */
  data: EqpmntAudio[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

/**
 * Данные
 * @example "..."
 */
export interface ShowRoomVerListItem {
  /**
   * version_id
   * @format int64
   */
  versionId?: number;
  /** verdesc */
  verdesc?: string;
  /** current_ver */
  currentVer?: boolean;
  /**
   * actdate
   * @format date-time
   */
  actdate?: string;
}

export interface ShowRoomVersResponse {
  /**
   * Данные
   * @example "..."
   */
  data: ShowRoomVerListItem[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

/**
 * Справочник в разделе НСИ
 * @example "..."
 */
export interface NsiListItem {
  /**
   * ID справочника
   * @format int64
   */
  id?: number;
  /** Имя справочника */
  name?: string;
  /** Название справочника */
  title?: string;
  /**
   * Номер п/п
   * @format int64
   */
  sortord?: number;
  /** Доступные фильтры */
  availableFilters?: string[];
}

export interface NsiListResponse {
  /**
   * Данные
   * @example "..."
   */
  data: NsiListItem[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface TicketTypesResponse {
  /**
   * Данные
   * @example "..."
   */
  data: TicketTypeDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface SoftVendorsResponse {
  /**
   * Данные
   * @example "..."
   */
  data: SoftVendorDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface ShowFormatsResponse {
  /**
   * Данные
   * @example "..."
   */
  data: ShowFormatDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface PusResponse {
  /**
   * Данные
   * @example "..."
   */
  data: PuDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface PuReasonsResponse {
  /**
   * Данные
   * @example "..."
   */
  data: PuReasonDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface OwnershipsResponse {
  /**
   * Данные
   * @example "..."
   */
  data: OwnershipDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface FutureReleasesResponse {
  /**
   * Данные
   * @example "..."
   */
  data: FutureReleaseDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface FilmsResponse {
  /**
   * Данные
   * @example "..."
   */
  data: FilmDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface EqpVendorsResponse {
  /**
   * Данные
   * @example "..."
   */
  data: EqpVendorDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface EqpTypesResponse {
  /**
   * Данные
   * @example "..."
   */
  data: EqpTypeDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface DistribsResponse {
  /**
   * Данные
   * @example "..."
   */
  data: DistribDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface CityPopulationsResponse {
  /**
   * Данные
   * @example "..."
   */
  data: CityPopulationDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface AllNotificationMessage {
  /**
   * ID объявления
   * @format int64
   */
  adsId: number;
  /**
   * Дата/Время создания
   * @example "..."
   */
  created: string;
  /**
   * Описание
   * @example "..."
   */
  annot: string;
}

export interface NotificationMessage {
  /**
   * Дата/Время создания
   * @example "..."
   */
  created: string;
  /**
   * Описание
   * @example "..."
   */
  annot: string;
  /**
   * Скрыть
   * @format int32
   */
  hide: number;
  /** @format int64 */
  notificationId?: number;
  /** @format int64 */
  notificationTypeId?: number;
}

/** Описание элемента меню */
export interface MenuItem {
  /**
   * ID элемента меню
   * @format int32
   */
  id?: number;
  /** Идентификатор раздела в UI */
  name?: string;
  /** Описание пункта меню */
  title?: string;
  /** Название кнопки пункта меню */
  menuTitle?: string;
  /** Название иконки */
  iconName?: string;
  /**
   * Порядок сортировки элементов в меню
   * @format int32
   */
  sortOrd?: number;
  /** Список вложенных элементов меню */
  children?: MenuItem[];
  /**
   * ID родительского пункта меню
   * @format int32
   */
  parentId?: number;
}

export interface LoadStatListResponse {
  /**
   * Данные
   * @example "..."
   */
  data: LoadStatLog[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

/**
 * Данные
 * @example "..."
 */
export interface LoadStatLog {
  /**
   * Дата/Время\nрегистрации
   * @format date-time
   */
  date_incoming?: string;
  /** ID Отправителя */
  org_id?: object;
  /** ID Киносети */
  sess_prnt_org_id?: object;
  /** ID Кинотеатра */
  sess_org_id?: object;
  /** Часовой пояс */
  time_zone?: object;
  /** Имя файла */
  packet_name?: string;
  /** Имя zip-пакета */
  zip_name?: string;
  /** Адрес клиента */
  ip?: string;
  /** Состояние */
  cur_pstate?: string;
  /** Последнее сообщение */
  last_pstate_msg?: string;
  /**
   * Дата/Время\nобработки
   * @format date-time
   */
  date_processing?: string;
  /** Ответ получен */
  is_log_downloaded?: boolean;
  /** Метод загрузки */
  load_method?: string;
  /** Тестовый */
  test?: string;
  /**
   * Дата/Время\nсеанса
   * @format date-time
   */
  show_date?: string;
}

/**
 * Данные
 * @example "..."
 */
export interface ListCommonDto {
  /** Идентификатор */
  id?: object;
  /** Значение */
  name?: string;
}

export interface ListResponse {
  /**
   * Данные
   * @example "..."
   */
  data: ListCommonDto[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

/**
 * Данные
 * @example "..."
 */
export interface FilmsRegListItem {
  /**
   * ID кинотеатра
   * @format int64
   */
  orgId?: number;
  /**
   * ID киносети
   * @format int64
   */
  prntOrgId?: number;
  /**  Название кинотеатра */
  orgName?: string;
  /** Название киносети */
  prntOrgName?: string;
  /** Название кинозала */
  sroom?: string;
  /**
   * Дата/Время сеанса
   * @format date-time
   */
  showDate?: string;
  /** Название фильма от прокатчика */
  filmNameOrig?: string;
  /** Название фильма по гос реестру */
  filmNameFound?: string;
  /** Выверен */
  isVerified?: boolean;
  /**
   * Код состояния
   * @format int64
   */
  puVerified?: number;
  /** Состояние */
  puVerifiedState?: string;
  /**
   * Дата/Время поступления
   * @format date-time
   */
  loadDate?: string;
  /**
   * Дата/Время выверки
   * @format date-time
   */
  puVrfdDate?: string;
  /** Кто сделал выверку */
  puVrfdUsr?: string;
  /** Номер ПУ */
  puNumOrig?: string;
  /** Номер ПУ, определен */
  puNumFound?: string;
}

export interface FilmsRegListResponse {
  /**
   * Данные
   * @example "..."
   */
  data: FilmsRegListItem[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

export interface FilmsRegRegistryListItem {
  /**
   * ID ПУ
   * @format int64
   */
  puId?: number;
  /**
   * ID фильма
   * @format int64
   */
  filmId?: number;
  /** Номер ПУ */
  puNum?: string;
  /** Название фильма */
  nameRus?: string;
  /** Год выпуска */
  prodYear?: string;
  /** Режисер */
  mdirector?: string;
  /** Страна */
  madein?: string;
  /** Студия */
  studia?: string;
  /** Жанр */
  genre?: string;
  /** Примечание */
  notetxt?: string;
  /** Аннотация */
  annotxt?: string;
}

export interface FilmsRegPacketsListItem {
  /**
   * sess_id
   * @format int64
   */
  sessId?: number;
  /** part_key */
  partKey?: string;
  /** Кинозал */
  sroomName?: string;
  /** Сеанс */
  sessTitle?: string;
  /** Фильм\n(по реестру) */
  filmNameOrig?: string;
  /** ПУ */
  puNum?: string;
  /** ПУ (по реестру) */
  puNumFound?: string;
  /**
   * Дата/Время
   * @format date-time
   */
  showDate?: string;
  /** Пакет */
  packetName?: string;
  /**
   * Кол-во билетов
   * @format int64
   */
  ticketsTotal?: number;
  /**
   * Кол-во возвратов
   * @format int64
   */
  ticketsTotalAnnul?: number;
  /**
   * Кол-во беспл. билетов
   * @format int64
   */
  ticketsFree?: number;
  /** Скидка, руб */
  ticketsDiscountSum?: number;
  /** Выручка, руб */
  ticketsSumFact?: number;
  /** Средняя цена, руб */
  ticketPriceFact?: number;
  /** Фестивальный */
  festival?: boolean;
}

export interface DataStatListResponse {
  /**
   * Данные
   * @example "..."
   */
  data: DataStatSessions[];
  /**
   * Примененные фильты
   * @example "..."
   */
  filters: ListCommonResponseFilters[];
  /**
   * Параметр сортировки
   * @example "+start_date"
   */
  sort: string;
  /**
   * Количество возвращаемых записей на странице
   * @format int32
   * @example 30
   */
  limit: number;
  /**
   * Смещение страниц относительно начала
   * @format int32
   * @example 3
   */
  offset: number;
  /**
   * Общее количество записей
   * @format int64
   * @example 3
   */
  totalCount: number;
  /**
   * Метаданные объекта data
   * @example "..."
   */
  metadata?: Field[];
}

/**
 * Данные
 * @example "..."
 */
export interface DataStatSessions {
  /** rec_uid */
  recUid?: string;
  /**
   * sess_id
   * @format int64
   */
  sessId?: number;
  /** sesstitle_uid */
  sessTitleUid?: string;
  /** Регион */
  regionRev?: string;
  /** Город */
  nasPunktRev?: string;
  /** ID кинотеатра */
  orgId?: string;
  /** Кинотеатр */
  org?: string;
  /** part_key */
  partKey?: string;
  /** Кинозал */
  sroomName?: string;
  /** Сеанс */
  sessTitle?: string;
  /** Фильм (по реестру) */
  filmNameOrig?: string;
  /** ПУ */
  puNum?: string;
  /** ПУ (по реестру) */
  puNumFound?: string;
  /**
   * Дата/Время
   * @format date-time
   */
  showDate?: string;
  /**
   * Кол-во билетов
   * @format int64
   */
  tckts?: number;
  /**
   * Кол-во возвратов
   * @format int64
   */
  tcktsStorn?: number;
  /**
   * Кол-во беспл. билетов
   * @format int64
   */
  tcktsFree?: number;
  /** Скидка, руб */
  summDisc?: number;
  /** Выручка, руб */
  summ?: number;
  /** Средняя цена, руб */
  priceFact?: number;
  /** Фестивальный */
  festival?: boolean;
}

export interface DataStatTickets {
  /**
   * rec_id
   * @format int64
   */
  recId?: number;
  /** part_key */
  partKey?: string;
  /**
   * sess_id
   * @format int64
   */
  sessId?: number;
  /**
   * packet_id
   * @format int64
   */
  packetId?: number;
  /** sesstitle_uid */
  sesstitleUid?: string;
  /** - */
  col0?: string;
  /** Кинозал */
  showroom?: string;
  /**
   * Дата/Время продажи
   * @format date-time
   */
  saleDate?: string;
  /** Сеанс */
  sessTitle?: string;
  /** Фильм\n(по реестру) */
  filmNameOrig?: string;
  /** ПУ */
  puNum?: string;
  /** ПУ (по реестру) */
  puNumFound?: string;
  /** Ряд */
  srRow?: string;
  /** Место */
  srCol?: string;
  /** Секция */
  srSection?: string;
  /** Тип */
  tcktypeName?: string;
  /** Цена, руб */
  ticketPrice0?: string;
  /** Скидка, руб */
  discount0?: string;
  /** Цена, руб */
  ticketPrice?: string;
  /** Скидка, руб */
  discount?: string;
  /**
   * Дата/Время регистрации
   * @format date-time
   */
  loaded?: string;
  /** Имя пакета */
  packetName?: string;
  /**
   * Дата/время удаления
   * @format date-time
   */
  delDate?: string;
  /** Кто удалил */
  delUser?: string;
  /** tstatus */
  tstatus?: string;
  /** deleted */
  deleted?: string;
  /** iserror */
  iserror?: boolean;
}

export interface DataStatSRooms {
  /**
   * sroom_id
   * @format int64
   */
  sroomId?: number;
  /** Кинозал */
  sroomName?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:8087";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title ФОНД КИНО EAIS API
 * @version 2.0
 * @license ФОНД КИНО
 * @termsOfService https://fond-kino.ru/
 * @baseUrl http://localhost:8087
 * @contact ЕКИНОБИЛЕТ <ekb@fond-kino.ru> (https://ekinobilet.fond-kino.ru/)
 *
 * CABINET API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Получение списка организаций, для предоставления им доступа к фильмам
     *
     * @tags Регистрационная карта
     * @name ReginfoShareFilmsListGet
     * @request GET:/api/v1/reginfo/{orgId}/sharefilms
     */
    reginfoShareFilmsListGet: (orgId: number, params: RequestParams = {}) =>
      this.request<RegInfoListResponse, ErrorMessageResponse>({
        path: `/api/v1/reginfo/${orgId}/sharefilms`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить данные о предоставлении организациям доступа к фильмам
     *
     * @tags Регистрационная карта
     * @name ReginfoShareFilmsPut
     * @request PUT:/api/v1/reginfo/{orgId}/sharefilms
     */
    reginfoShareFilmsPut: (orgId: number, data: RegInfoShareDto[], params: RequestParams = {}) =>
      this.request<void, ErrorMessageResponse>({
        path: `/api/v1/reginfo/${orgId}/sharefilms`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Получение данных о пользователе
     *
     * @tags Организации - Пользователи отчётами
     * @name OrgsRptUsersGet
     * @request GET:/api/v1/orgs/rptuser/{orgId}
     */
    orgsRptUsersGet: (orgId: number, params: RequestParams = {}) =>
      this.request<OrgRptUser, ErrorMessageResponse>({
        path: `/api/v1/orgs/rptuser/${orgId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить данные о пользователе
     *
     * @tags Организации - Пользователи отчётами
     * @name OrgsRptUsersPut
     * @request PUT:/api/v1/orgs/rptuser/{orgId}
     */
    orgsRptUsersPut: (orgId: number, data: OrgRptUser, params: RequestParams = {}) =>
      this.request<OrgRptUser, ErrorMessageResponse>({
        path: `/api/v1/orgs/rptuser/${orgId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Изменить данные о праве на фильм
     *
     * @tags Организации - Пользователи отчётами
     * @name OrgsRptUsersFilmPermsPut
     * @request PUT:/api/v1/orgs/rptuser/{orgId}/filmperms/{permId}
     */
    orgsRptUsersFilmPermsPut: (
      orgId: number,
      permId: number,
      data: FilmPermissionListData,
      params: RequestParams = {},
    ) =>
      this.request<FilmPermissionListData, ErrorMessageResponse>({
        path: `/api/v1/orgs/rptuser/${orgId}/filmperms/${permId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных о киносети
     *
     * @tags Организации - Киносети
     * @name OrgsHoldingGet
     * @request GET:/api/v1/orgs/holding/{id}
     */
    orgsHoldingGet: (id: number, params: RequestParams = {}) =>
      this.request<OrgHolding, ErrorMessageResponse>({
        path: `/api/v1/orgs/holding/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить данные о киносети
     *
     * @tags Организации - Киносети
     * @name OrgsHoldingPut
     * @request PUT:/api/v1/orgs/holding/{id}
     */
    orgsHoldingPut: (id: number, data: OrgHolding, params: RequestParams = {}) =>
      this.request<OrgHolding, ErrorMessageResponse>({
        path: `/api/v1/orgs/holding/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных о кинотеатре
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaGet
     * @request GET:/api/v1/orgs/cinema/{orgId}
     */
    orgsCinemaGet: (orgId: number, params: RequestParams = {}) =>
      this.request<OrgCinema, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/${orgId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить данные о кинотеатре
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaPut
     * @request PUT:/api/v1/orgs/cinema/{orgId}
     */
    orgsCinemaPut: (orgId: number, data: OrgCinema, params: RequestParams = {}) =>
      this.request<OrgCinema, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/${orgId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных кинозала
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaShowRoomGet
     * @request GET:/api/v1/orgs/cinema/showrooms/{id}
     */
    orgsCinemaShowRoomGet: (
      id: number,
      query: {
        /**
         * ID версии записи
         * @format int64
         */
        verId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ShowRoomData, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/showrooms/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Изменить данные о кинозале
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaShowRoomPut
     * @request PUT:/api/v1/orgs/cinema/showrooms/{id}
     */
    orgsCinemaShowRoomPut: (id: number, data: ShowRoomData, params: RequestParams = {}) =>
      this.request<ShowRoomData, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/showrooms/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удалить данные о кинозале
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaShowRoomDel
     * @request DELETE:/api/v1/orgs/cinema/showrooms/{id}
     */
    orgsCinemaShowRoomDel: (
      id: number,
      query: {
        /**
         * ID версии записи
         * @format int64
         */
        verId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<number, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/showrooms/${id}`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * @description Получение данных о типе билета
     *
     * @tags API НСИ v1
     * @name NsiTicketTypeGet
     * @request GET:/api/v1/nsi/tickettypes/{id}
     */
    nsiTicketTypeGet: (id: number, params: RequestParams = {}) =>
      this.request<TicketTypeDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/tickettypes/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить данные типа билета
     *
     * @tags API НСИ v1
     * @name NsiTicketTypesPut
     * @request PUT:/api/v1/nsi/tickettypes/{id}
     */
    nsiTicketTypesPut: (id: number, data: TicketTypeDto, params: RequestParams = {}) =>
      this.request<TicketTypeDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/tickettypes/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удалить данные о типе билета
     *
     * @tags API НСИ v1
     * @name NsiTicketTypesDel
     * @request DELETE:/api/v1/nsi/tickettypes/{id}
     */
    nsiTicketTypesDel: (id: number, params: RequestParams = {}) =>
      this.request<number, ErrorMessageResponse>({
        path: `/api/v1/nsi/tickettypes/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Получение данных о поставщике ПО
     *
     * @tags API НСИ v1
     * @name NsiSwVendorGet
     * @request GET:/api/v1/nsi/softvendors/{id}
     */
    nsiSwVendorGet: (id: number, params: RequestParams = {}) =>
      this.request<SoftVendorDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/softvendors/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить данные поставщика ПО
     *
     * @tags API НСИ v1
     * @name NsiSwVendorsPut
     * @request PUT:/api/v1/nsi/softvendors/{id}
     */
    nsiSwVendorsPut: (id: number, data: SoftVendorDto, params: RequestParams = {}) =>
      this.request<SoftVendorDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/softvendors/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удалить данные поставщика ПО
     *
     * @tags API НСИ v1
     * @name NsiSwVendorsDel
     * @request DELETE:/api/v1/nsi/softvendors/{id}
     */
    nsiSwVendorsDel: (id: number, params: RequestParams = {}) =>
      this.request<number, ErrorMessageResponse>({
        path: `/api/v1/nsi/softvendors/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Получение данных о формате показа
     *
     * @tags API НСИ v1
     * @name NsiShowFormatGet
     * @request GET:/api/v1/nsi/showformats/{id}
     */
    nsiShowFormatGet: (id: number, params: RequestParams = {}) =>
      this.request<ShowFormatDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/showformats/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить данные формата показа
     *
     * @tags API НСИ v1
     * @name NsiShowFormatsPut
     * @request PUT:/api/v1/nsi/showformats/{id}
     */
    nsiShowFormatsPut: (id: number, data: ShowFormatDto, params: RequestParams = {}) =>
      this.request<ShowFormatDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/showformats/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удалить данные формата показа
     *
     * @tags API НСИ v1
     * @name NsiShowFormatsDel
     * @request DELETE:/api/v1/nsi/showformats/{id}
     */
    nsiShowFormatsDel: (id: number, params: RequestParams = {}) =>
      this.request<number, ErrorMessageResponse>({
        path: `/api/v1/nsi/showformats/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Получение данных о ПУ
     *
     * @tags API НСИ v1
     * @name NsiPuGet
     * @request GET:/api/v1/nsi/pus/{id}
     */
    nsiPuGet: (id: number, params: RequestParams = {}) =>
      this.request<PuDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/pus/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить ПУ
     *
     * @tags API НСИ v1
     * @name NsiPuPut
     * @request PUT:/api/v1/nsi/pus/{id}
     */
    nsiPuPut: (id: number, data: PuDto, params: RequestParams = {}) =>
      this.request<PuDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/pus/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавить ПУ
     *
     * @tags API НСИ v1
     * @name NsiPuPost
     * @request POST:/api/v1/nsi/pus/{id}
     */
    nsiPuPost: (id: number, data: PuDto, params: RequestParams = {}) =>
      this.request<PuDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/pus/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получить даты релиза и даты превью для ПУ
     *
     * @tags API НСИ v1
     * @name NsiPuSetReleaseDateGet
     * @request GET:/api/v1/nsi/pus/{id}/release-date
     */
    nsiPuSetReleaseDateGet: (id: number, params: RequestParams = {}) =>
      this.request<PuReleaseDateDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/pus/${id}/release-date`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить даты релиза и даты превью для ПУ
     *
     * @tags API НСИ v1
     * @name NsiPuSetReleaseDatePut
     * @request PUT:/api/v1/nsi/pus/{id}/release-date
     */
    nsiPuSetReleaseDatePut: (id: number, data: PuReleaseDateDto, params: RequestParams = {}) =>
      this.request<PuReleaseDateDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/pus/${id}/release-date`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получить список прокатчиков для ПУ
     *
     * @tags API НСИ v1
     * @name NsiPuDistribsGet
     * @request GET:/api/v1/nsi/pus/{id}/distribs
     */
    nsiPuDistribsGet: (id: number, params: RequestParams = {}) =>
      this.request<PuDistrbDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/pus/${id}/distribs`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить список прокатчиков для ПУ
     *
     * @tags API НСИ v1
     * @name NsiPuDistribsPut
     * @request PUT:/api/v1/nsi/pus/{id}/distribs
     */
    nsiPuDistribsPut: (id: number, data: PuDistrbDto, params: RequestParams = {}) =>
      this.request<PuDistrbDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/pus/${id}/distribs`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных о причине отсутствия ПУ
     *
     * @tags API НСИ v1
     * @name NsiPuReasonGet
     * @request GET:/api/v1/nsi/pureasons/{id}
     */
    nsiPuReasonGet: (id: number, params: RequestParams = {}) =>
      this.request<PuReasonDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/pureasons/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить данные причины отсутствия ПУ
     *
     * @tags API НСИ v1
     * @name NsiPuReasonsPut
     * @request PUT:/api/v1/nsi/pureasons/{id}
     */
    nsiPuReasonsPut: (id: number, data: PuReasonDto, params: RequestParams = {}) =>
      this.request<PuReasonDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/pureasons/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удалить данные причины отсутствия ПУ
     *
     * @tags API НСИ v1
     * @name NsiPuReasonsDel
     * @request DELETE:/api/v1/nsi/pureasons/{id}
     */
    nsiPuReasonsDel: (id: number, params: RequestParams = {}) =>
      this.request<number, ErrorMessageResponse>({
        path: `/api/v1/nsi/pureasons/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Получение данных о типе формы собственности
     *
     * @tags API НСИ v1
     * @name NsiOwnershipGet
     * @request GET:/api/v1/nsi/ownerships/{id}
     */
    nsiOwnershipGet: (id: number, params: RequestParams = {}) =>
      this.request<OwnershipDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/ownerships/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить данные о типе формы собственности
     *
     * @tags API НСИ v1
     * @name NsiOwnershipsPut
     * @request PUT:/api/v1/nsi/ownerships/{id}
     */
    nsiOwnershipsPut: (id: number, data: OwnershipDto, params: RequestParams = {}) =>
      this.request<OwnershipDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/ownerships/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удалить данные о типе формы собственности
     *
     * @tags API НСИ v1
     * @name NsiOwnershipsDel
     * @request DELETE:/api/v1/nsi/ownerships/{id}
     */
    nsiOwnershipsDel: (id: number, params: RequestParams = {}) =>
      this.request<number, ErrorMessageResponse>({
        path: `/api/v1/nsi/ownerships/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Получение данных о будущем релизе
     *
     * @tags API НСИ v1
     * @name NsiFutureReleaseGet
     * @request GET:/api/v1/nsi/futurereleases/{id}
     */
    nsiFutureReleaseGet: (id: number, params: RequestParams = {}) =>
      this.request<FutureReleaseDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/futurereleases/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить данные о будущем релизе
     *
     * @tags API НСИ v1
     * @name NsiFutureReleasesPut
     * @request PUT:/api/v1/nsi/futurereleases/{id}
     */
    nsiFutureReleasesPut: (id: number, data: FutureReleaseDto, params: RequestParams = {}) =>
      this.request<FutureReleaseDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/futurereleases/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удалить данные о будущем релизе
     *
     * @tags API НСИ v1
     * @name NsiFutureReleasesDel
     * @request DELETE:/api/v1/nsi/futurereleases/{id}
     */
    nsiFutureReleasesDel: (id: number, params: RequestParams = {}) =>
      this.request<number, ErrorMessageResponse>({
        path: `/api/v1/nsi/futurereleases/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Получение данных о фильме
     *
     * @tags API НСИ v1
     * @name NsiFilmGet
     * @request GET:/api/v1/nsi/films/{id}
     */
    nsiFilmGet: (id: number, params: RequestParams = {}) =>
      this.request<FilmDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/films/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить данные о фильме
     *
     * @tags API НСИ v1
     * @name NsiFilmPut
     * @request PUT:/api/v1/nsi/films/{id}
     */
    nsiFilmPut: (id: number, data: FilmDto, params: RequestParams = {}) =>
      this.request<FilmDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/films/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных о поставщике оборудования
     *
     * @tags API НСИ v1
     * @name NsiEqpVendorGet
     * @request GET:/api/v1/nsi/eqpvendors/{id}
     */
    nsiEqpVendorGet: (id: number, params: RequestParams = {}) =>
      this.request<EqpVendorDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/eqpvendors/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить данные о поставщике оборудования
     *
     * @tags API НСИ v1
     * @name NsiEqpVendorsPut
     * @request PUT:/api/v1/nsi/eqpvendors/{id}
     */
    nsiEqpVendorsPut: (id: number, data: EqpVendorDto, params: RequestParams = {}) =>
      this.request<EqpVendorDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/eqpvendors/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удалить данные о поставщике оборудования
     *
     * @tags API НСИ v1
     * @name NsiEqpVendorsDel
     * @request DELETE:/api/v1/nsi/eqpvendors/{id}
     */
    nsiEqpVendorsDel: (id: number, params: RequestParams = {}) =>
      this.request<number, ErrorMessageResponse>({
        path: `/api/v1/nsi/eqpvendors/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Получение данных о типе видеооборудования
     *
     * @tags API НСИ v1
     * @name NsiEqpTypeGet
     * @request GET:/api/v1/nsi/eqptypes/{id}
     */
    nsiEqpTypeGet: (id: number, params: RequestParams = {}) =>
      this.request<EqpTypeDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/eqptypes/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Изменить данные типа видеооборудования
     *
     * @tags API НСИ v1
     * @name NsiEqpTypesPut
     * @request PUT:/api/v1/nsi/eqptypes/{id}
     */
    nsiEqpTypesPut: (id: number, data: EqpTypeDto, params: RequestParams = {}) =>
      this.request<EqpTypeDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/eqptypes/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удалить данные о типе видеооборудования
     *
     * @tags API НСИ v1
     * @name NsiEqpTypesDel
     * @request DELETE:/api/v1/nsi/eqptypes/{id}
     */
    nsiEqpTypesDel: (id: number, params: RequestParams = {}) =>
      this.request<number, ErrorMessageResponse>({
        path: `/api/v1/nsi/eqptypes/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Получить данные о прокатчике
     *
     * @tags API НСИ v1
     * @name NsiDistribGet
     * @request GET:/api/v1/nsi/distribs/{id}
     */
    nsiDistribGet: (id: number, params: RequestParams = {}) =>
      this.request<DistribDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/distribs/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Изменить данные о прокатчике
     *
     * @tags API НСИ v1
     * @name NsiDistribPut
     * @request PUT:/api/v1/nsi/distribs/{id}
     */
    nsiDistribPut: (id: number, data: DistribDto, params: RequestParams = {}) =>
      this.request<DistribDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/distribs/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удалить данные прокатчика
     *
     * @tags API НСИ v1
     * @name NsiDistribDel
     * @request DELETE:/api/v1/nsi/distribs/{id}
     */
    nsiDistribDel: (id: number, params: RequestParams = {}) =>
      this.request<number, ErrorMessageResponse>({
        path: `/api/v1/nsi/distribs/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Получение данных о населении городов
     *
     * @tags API НСИ v1
     * @name NsiCityPopulationGet
     * @request GET:/api/v1/nsi/citypopulations/{id}
     */
    nsiCityPopulationGet: (id: string, params: RequestParams = {}) =>
      this.request<CityPopulationDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/citypopulations/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Изменить данные населения городов
     *
     * @tags API НСИ v1
     * @name NsiCityPopulationsPut
     * @request PUT:/api/v1/nsi/citypopulations/{id}
     */
    nsiCityPopulationsPut: (id: string, data: CityPopulationDto, params: RequestParams = {}) =>
      this.request<CityPopulationDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/citypopulations/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Удалить данные населения городов
     *
     * @tags API НСИ v1
     * @name NsiCityPopulationsDel
     * @request DELETE:/api/v1/nsi/citypopulations/{id}
     */
    nsiCityPopulationsDel: (id: string, params: RequestParams = {}) =>
      this.request<string, ErrorMessageResponse>({
        path: `/api/v1/nsi/citypopulations/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Получение настроек текущего пользователя
     *
     * @tags API НСИ v1
     * @name UserSettingsGet
     * @request GET:/api/v1/user/settings
     */
    userSettingsGet: (
      query: {
        /**
         * ID настроек текущего пользователя
         * @example "UI-PARAMS"
         */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrgsUsrLogDto, ErrorMessageResponse>({
        path: `/api/v1/user/settings`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Добавить настройки текущего пользователя
     *
     * @tags API НСИ v1
     * @name UserSettingsPost
     * @request POST:/api/v1/user/settings
     */
    userSettingsPost: (
      query: {
        /**
         * ID настроек текущего пользователя
         * @example "UI_PARAMS"
         */
        id: string;
      },
      data: OrgsUsrLogDto,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorMessageResponse>({
        path: `/api/v1/user/settings`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Добавить данные о пользователе
     *
     * @tags Организации - Пользователи отчётами
     * @name OrgsRptUsersPost
     * @request POST:/api/v1/orgs/rptuser
     */
    orgsRptUsersPost: (data: OrgRptUser, params: RequestParams = {}) =>
      this.request<OrgRptUser, ErrorMessageResponse>({
        path: `/api/v1/orgs/rptuser`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавить данные о праве на фильм
     *
     * @tags Организации - Пользователи отчётами
     * @name OrgsRptUsersFilmPermsPost
     * @request POST:/api/v1/orgs/rptuser/{orgId}/filmperms
     */
    orgsRptUsersFilmPermsPost: (orgId: number, data: FilmPermissionListData, params: RequestParams = {}) =>
      this.request<FilmPermissionListData, ErrorMessageResponse>({
        path: `/api/v1/orgs/rptuser/${orgId}/filmperms`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавить новую киносеть
     *
     * @tags Организации - Киносети
     * @name OrgsHoldingPost
     * @request POST:/api/v1/orgs/holding
     */
    orgsHoldingPost: (data: OrgHolding, params: RequestParams = {}) =>
      this.request<OrgHolding, ErrorMessageResponse>({
        path: `/api/v1/orgs/holding`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавить новый кинотеатр
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaPost
     * @request POST:/api/v1/orgs/cinema
     */
    orgsCinemaPost: (data: OrgCinema, params: RequestParams = {}) =>
      this.request<OrgCinema, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение списка кинозалов кинотеатра
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaShowRoomsGet
     * @request GET:/api/v1/orgs/cinema/{orgId}/showrooms
     */
    orgsCinemaShowRoomsGet: (
      orgId: number,
      query?: {
        /**
         * ID кинозала
         * @format int64
         */
        showrId?: number;
        /**
         * На дату
         * @format date
         */
        ondate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ShowRoomsResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/${orgId}/showrooms`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Добавить данные о кинозале
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaShowRoomPost
     * @request POST:/api/v1/orgs/cinema/{orgId}/showrooms
     */
    orgsCinemaShowRoomPost: (orgId: number, data: ShowRoomData, params: RequestParams = {}) =>
      this.request<ShowRoomData, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/${orgId}/showrooms`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение списка примечаний о кинотеатре
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaNotesGet
     * @request GET:/api/v1/orgs/cinema/{orgId}/notes
     */
    orgsCinemaNotesGet: (orgId: number, params: RequestParams = {}) =>
      this.request<NotesResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/${orgId}/notes`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Добавить данные о примечании о кинотеатре
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaNotesPut
     * @request POST:/api/v1/orgs/cinema/{orgId}/notes
     */
    orgsCinemaNotesPut: (orgId: number, data: NoteListItem, params: RequestParams = {}) =>
      this.request<NoteListItem, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/${orgId}/notes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных справочника типов билета
     *
     * @tags API НСИ v1
     * @name NsiTicketTypesGet
     * @request GET:/api/v1/nsi/tickettypes
     */
    nsiTicketTypesGet: (
      query?: {
        /** Фильтр по имени и описанию */
        aname?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TicketTypesResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi/tickettypes`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Добавить данные о типе билета
     *
     * @tags API НСИ v1
     * @name NsiTicketTypesPost
     * @request POST:/api/v1/nsi/tickettypes
     */
    nsiTicketTypesPost: (data: TicketTypeDto, params: RequestParams = {}) =>
      this.request<TicketTypeDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/tickettypes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных справочника поставщиков ПО
     *
     * @tags API НСИ v1
     * @name NsiSwVendorsGet
     * @request GET:/api/v1/nsi/softvendors
     */
    nsiSwVendorsGet: (
      query?: {
        /** Фильтр по имени и контактам */
        vndname?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SoftVendorsResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi/softvendors`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Добавить данные поставщика ПО
     *
     * @tags API НСИ v1
     * @name NsiSwVendorsPost
     * @request POST:/api/v1/nsi/softvendors
     */
    nsiSwVendorsPost: (data: SoftVendorDto, params: RequestParams = {}) =>
      this.request<SoftVendorDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/softvendors`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных справочника форматов показа
     *
     * @tags API НСИ v1
     * @name NsiShowFormatsGet
     * @request GET:/api/v1/nsi/showformats
     */
    nsiShowFormatsGet: (
      query?: {
        /** Фильтр по имени и описанию */
        aname?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ShowFormatsResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi/showformats`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Добавить данные формата показа
     *
     * @tags API НСИ v1
     * @name NsiShowFormatsPost
     * @request POST:/api/v1/nsi/showformats
     */
    nsiShowFormatsPost: (data: ShowFormatDto, params: RequestParams = {}) =>
      this.request<ShowFormatDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/showformats`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных справочника причин отсутствия ПУ
     *
     * @tags API НСИ v1
     * @name NsiPuReasonsGet
     * @request GET:/api/v1/nsi/pureasons
     */
    nsiPuReasonsGet: (
      query?: {
        /** Фильтр по имени и описанию */
        aname?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PuReasonsResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi/pureasons`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Добавить данные причины отсутствия ПУ
     *
     * @tags API НСИ v1
     * @name NsiPuReasonsPost
     * @request POST:/api/v1/nsi/pureasons
     */
    nsiPuReasonsPost: (data: PuReasonDto, params: RequestParams = {}) =>
      this.request<PuReasonDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/pureasons`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных справочника типов форм собственности
     *
     * @tags API НСИ v1
     * @name NsiOwnershipsGet
     * @request GET:/api/v1/nsi/ownerships
     */
    nsiOwnershipsGet: (
      query?: {
        /** Фильтр по имени и описанию */
        prop?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OwnershipsResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi/ownerships`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Добавить данные о типе формы собственности
     *
     * @tags API НСИ v1
     * @name NsiOwnershipsPost
     * @request POST:/api/v1/nsi/ownerships
     */
    nsiOwnershipsPost: (data: OwnershipDto, params: RequestParams = {}) =>
      this.request<OwnershipDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/ownerships`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных справочника будущих релизов
     *
     * @tags API НСИ v1
     * @name NsiFutureReleasesGet
     * @request GET:/api/v1/nsi/futurereleases
     */
    nsiFutureReleasesGet: (
      query?: {
        /** Фильтр по названию */
        name_rus?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FutureReleasesResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi/futurereleases`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Добавить данные о будущем релизе
     *
     * @tags API НСИ v1
     * @name NsiFutureReleasesPost
     * @request POST:/api/v1/nsi/futurereleases
     */
    nsiFutureReleasesPost: (data: FutureReleaseDto, params: RequestParams = {}) =>
      this.request<FutureReleaseDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/futurereleases`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавление данных о фильме
     *
     * @tags API НСИ v1
     * @name NsiFilmPost
     * @request POST:/api/v1/nsi/films/
     */
    nsiFilmPost: (data: FilmDto, params: RequestParams = {}) =>
      this.request<FilmDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/films/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных справочника поставщиков оборудования
     *
     * @tags API НСИ v1
     * @name NsiEqpVendorsGet
     * @request GET:/api/v1/nsi/eqpvendors
     */
    nsiEqpVendorsGet: (
      query?: {
        /** Фильтр по имени и описанию */
        aname?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EqpVendorsResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi/eqpvendors`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Добавить данные о поставщике оборудования
     *
     * @tags API НСИ v1
     * @name NsiEqpVendorsPost
     * @request POST:/api/v1/nsi/eqpvendors
     */
    nsiEqpVendorsPost: (data: EqpVendorDto, params: RequestParams = {}) =>
      this.request<EqpVendorDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/eqpvendors`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных справочника типов видеооборудования
     *
     * @tags API НСИ v1
     * @name NsiEqpTypesGet
     * @request GET:/api/v1/nsi/eqptypes
     */
    nsiEqpTypesGet: (
      query?: {
        /** Фильтр по имени и описанию */
        eqtype_name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EqpTypesResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi/eqptypes`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Добавить данные о типе видеооборудования
     *
     * @tags API НСИ v1
     * @name NsiEqpTypesPost
     * @request POST:/api/v1/nsi/eqptypes
     */
    nsiEqpTypesPost: (data: EqpTypeDto, params: RequestParams = {}) =>
      this.request<EqpTypeDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/eqptypes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавить данные о прокатчике
     *
     * @tags API НСИ v1
     * @name NsiDistribPost
     * @request POST:/api/v1/nsi/distribs/
     */
    nsiDistribPost: (data: DistribDto, params: RequestParams = {}) =>
      this.request<DistribDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/distribs/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных справочника населения городов
     *
     * @tags API НСИ v1
     * @name NsiCityPopulationsGet
     * @request GET:/api/v1/nsi/citypopulations
     */
    nsiCityPopulationsGet: (
      query?: {
        /** Фильтр по имени и описанию */
        tkldr_name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CityPopulationsResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi/citypopulations`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавить данные населения городов
     *
     * @tags API НСИ v1
     * @name NsiCityPopulationsPost
     * @request POST:/api/v1/nsi/citypopulations
     */
    nsiCityPopulationsPost: (data: CityPopulationDto, params: RequestParams = {}) =>
      this.request<CityPopulationDto, ErrorMessageResponse>({
        path: `/api/v1/nsi/citypopulations`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Сбросить признак состояния выверки выбранных фильмов
     *
     * @tags API Реестр фильмов v1
     * @name FilmsregDoResetPost
     * @request POST:/api/v1/filmsreg/doreset
     */
    filmsregDoResetPost: (data: FilmsRegSessIdsBody, params: RequestParams = {}) =>
      this.request<void, ErrorMessageResponse>({
        path: `/api/v1/filmsreg/doreset`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Установить ПУ ID в выбранных сеансах
     *
     * @tags API Реестр фильмов v1
     * @name FilmsregRegistryDoManualPost
     * @request POST:/api/v1/filmsreg/domanual/{id}
     */
    filmsregRegistryDoManualPost: (id: number, data: FilmsRegSessIdsBody, params: RequestParams = {}) =>
      this.request<void, ErrorMessageResponse>({
        path: `/api/v1/filmsreg/domanual/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags API НСИ v1
     * @name ShowStatus
     * @request GET:/api/v1
     */
    showStatus: (params: RequestParams = {}) =>
      this.request<SimpleResult, ErrorMessageResponse>({
        path: `/api/v1`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Профиль текущего пользоватьеля
     *
     * @tags API НСИ v1
     * @name Login1
     * @request GET:/api/v1/user/current
     */
    login1: (params: RequestParams = {}) =>
      this.request<SsoUser, ErrorMessageResponse>({
        path: `/api/v1/user/current`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение метаданных списка организаций, для предоставления им доступа к фильмам
     *
     * @tags Регистрационная карта
     * @name ReginfoShareFilmsMetadataGet
     * @request GET:/api/v1/reginfo/sharefilms/metadata
     */
    reginfoShareFilmsMetadataGet: (params: RequestParams = {}) =>
      this.request<MetadataResponse, ErrorMessageResponse>({
        path: `/api/v1/reginfo/sharefilms/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение списка
     *
     * @tags Организации - Общее
     * @name OrgsVerificationStatesGet
     * @request GET:/api/v1/orgs/verificationstates
     */
    orgsVerificationStatesGet: (params: RequestParams = {}) =>
      this.request<OrgsVerificationState[], ErrorMessageResponse>({
        path: `/api/v1/orgs/verificationstates`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение списка действий пользователя
     *
     * @tags Организации - Общее
     * @name OrgsUsrLogGet
     * @request GET:/api/v1/orgs/usrlog/{orgId}
     */
    orgsUsrLogGet: (orgId: number, params: RequestParams = {}) =>
      this.request<OrgsUsrLogResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/usrlog/${orgId}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение списка
     *
     * @tags Организации - Общее
     * @name OrgsUserRolesGet
     * @request GET:/api/v1/orgs/userroles
     */
    orgsUserRolesGet: (params: RequestParams = {}) =>
      this.request<OrgsUserRole[], ErrorMessageResponse>({
        path: `/api/v1/orgs/userroles`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение списка
     *
     * @tags Организации - Общее
     * @name OrgsTimeZonesGet
     * @request GET:/api/v1/orgs/timezones
     */
    orgsTimeZonesGet: (params: RequestParams = {}) =>
      this.request<OrgsTimeZone[], ErrorMessageResponse>({
        path: `/api/v1/orgs/timezones`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение метаданных статистики по кинотеатру по загруженным пакетам
     *
     * @tags Организации - Статистика
     * @name OrgsStatsLoadLogsMetadataGet
     * @request GET:/api/v1/orgs/stats/loadlogs/metadata
     */
    orgsStatsLoadLogsMetadataGet: (params: RequestParams = {}) =>
      this.request<MetadataResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/stats/loadlogs/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение фильтрованного списка статистики по кинотеатру по загруженным пакетам (протоколы)
     *
     * @tags Организации - Статистика
     * @name OrgsStatsLoadLogsGet
     * @request GET:/api/v1/orgs/stats/loadlogs/filterlist
     */
    orgsStatsLoadLogsGet: (
      query?: {
        /**
         * ID кинотеатра
         * @format int64
         */
        force_org_id?: number;
        /**
         * Дата регистрации, с
         * @format date
         */
        reg_from?: string;
        /**
         * Дата регистрации, по
         * @format date
         */
        reg_to?: string;
        /**
         * Часовой пояс
         * @format int64
         * @default 0
         */
        time_zone?: number;
        /**
         * Отправитель
         * @format int64
         */
        org_id?: number;
        /**
         * Id киносети
         * @format int64
         */
        sess_prnt_org_id?: number;
        /**
         * ID кинотеатра
         * @format int64
         */
        sess_org_id?: number;
        /** Имя файла */
        packet_name?: string;
        /** Состояние */
        cur_pstate?: string;
        /** Сообщение */
        last_pstate_msg?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<StatsLoadLogListResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/stats/loadlogs/filterlist`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение метаданных статистики по кинотеатру по загруженным пакетам
     *
     * @tags Организации - Статистика
     * @name OrgsStatsFPacketStatMetadataGet
     * @request GET:/api/v1/orgs/stats/fpacketstats/metadata
     */
    orgsStatsFPacketStatMetadataGet: (params: RequestParams = {}) =>
      this.request<MetadataResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/stats/fpacketstats/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение фильтрованного списка статистики по кинотеатру по загруженным пакетам (запросы на удаление)
     *
     * @tags Организации - Статистика
     * @name OrgsStatsFPacketStatGet
     * @request GET:/api/v1/orgs/stats/fpacketstats/filterlist
     */
    orgsStatsFPacketStatGet: (
      query?: {
        /**
         * Дата регистрации, с
         * @format date
         */
        seld_from?: string;
        /**
         * Дата регистрации, по
         * @format date
         */
        seld_to?: string;
        /**
         * Часовой пояс
         * @format int64
         * @default 0
         */
        time_zone?: number;
        /** Имя пакета */
        packetlist_name?: string;
        /**
         * ID кинотеатра
         * @format int64
         */
        org_id?: number;
        /**
         * ID киносети
         * @format int64
         */
        prnt_org_id?: number;
        /** Типа запроса */
        request_type?: string;
        /** Текущее состояние пакета */
        curpstate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<StatsFPacketStatListResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/stats/fpacketstats/filterlist`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение статистики по кинотеатру по загруженным пакетам
     *
     * @tags Организации - Статистика
     * @name OrgsStatsFPacketsGet
     * @request GET:/api/v1/orgs/stats/fpackets
     */
    orgsStatsFPacketsGet: (
      query: {
        /**
         * ID пакета
         * @format int64
         */
        packetlist_id: number;
        /**
         * Дата регистрации, с
         * @format date
         */
        seld_from?: string;
        /**
         * Дата регистрации, по
         * @format date
         */
        seld_to?: string;
        /**
         * Часовой пояс
         * @format int64
         */
        time_zone?: number;
        /** Название пакета */
        packetname?: string;
        /** ID кинотеатра */
        org_id?: string;
        /** ID киносети */
        holding_id?: string;
        /** Типа запроса */
        requesttype?: string;
        /** Текущее состояние пакета */
        curpstate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrgsStatsFPacket[], ErrorMessageResponse>({
        path: `/api/v1/orgs/stats/fpackets`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение статистики по кинотеатру по загруженным пакетам
     *
     * @tags Организации - Статистика
     * @name OrgsStatsFPacketDataZipGet
     * @request GET:/api/v1/orgs/stats/fpacketdata/zip
     */
    orgsStatsFPacketDataZipGet: (
      query: {
        /**
         * ID пакета
         * @format int64
         */
        packet_id: number;
        /**
         * part_key
         * @format date
         */
        packet_regd: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrgsStatsFPacketDataZip[], ErrorMessageResponse>({
        path: `/api/v1/orgs/stats/fpacketdata/zip`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение статистики по кинотеатру по загруженным пакетам
     *
     * @tags Организации - Статистика
     * @name OrgsStatsFPacketDataXmlGet
     * @request GET:/api/v1/orgs/stats/fpacketdata/xml
     */
    orgsStatsFPacketDataXmlGet: (
      query: {
        /**
         * ID пакета
         * @format int64
         */
        packet_id: number;
        /** part_key */
        part_key: string;
        /**
         * Не выводить удаленные
         * @format int64
         */
        hidedeleted?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrgsStatsFPacketDataXml[], ErrorMessageResponse>({
        path: `/api/v1/orgs/stats/fpacketdata/xml`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение метаданных статистики по кинотеатру по неделям
     *
     * @tags Организации - Статистика
     * @name OrgsStatsByWeekMetadataGet
     * @request GET:/api/v1/orgs/stats/byweek/metadata
     */
    orgsStatsByWeekMetadataGet: (params: RequestParams = {}) =>
      this.request<MetadataResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/stats/byweek/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение фильтрованного списка статистики по кинотеатру по неделям
     *
     * @tags Организации - Статистика
     * @name OrgsStatsByWeekGet
     * @request GET:/api/v1/orgs/stats/byweek/filterlist
     */
    orgsStatsByWeekGet: (
      query: {
        /**
         * ID кинотеатра
         * @format int64
         */
        force_org_id?: number;
        /**
         * Дата начала недели
         * @format date
         */
        date_from: string;
        /**
         * Часовой пояс
         * @format int64
         * @default 0
         */
        time_zone?: number;
        /** Регион */
        region?: string;
        /** Нас. пункт */
        city?: string;
        /** Киносеть */
        holding?: string;
        /** Кинотеатр */
        theatre?: string;
        /** Произв. ПО */
        vendor?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<StatsByWeekListResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/stats/byweek/filterlist`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение списка
     *
     * @tags Организации - Общее
     * @name OrgsStateMatsGet
     * @request GET:/api/v1/orgs/statemats
     */
    orgsStateMatsGet: (params: RequestParams = {}) =>
      this.request<OrgsStateMat[], ErrorMessageResponse>({
        path: `/api/v1/orgs/statemats`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение списка
     *
     * @tags Организации - Общее
     * @name OrgsShowRoomStatesGet
     * @request GET:/api/v1/orgs/showroomstates
     */
    orgsShowRoomStatesGet: (params: RequestParams = {}) =>
      this.request<OrgsShowRoomState[], ErrorMessageResponse>({
        path: `/api/v1/orgs/showroomstates`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение фильтрованного списка прав на фильмы
     *
     * @tags Организации - Пользователи отчётами
     * @name OrgsRptUsersFilmPermsFilterListGet
     * @request GET:/api/v1/orgs/rptuser/{orgId}/filmperms/filterlist
     */
    orgsRptUsersFilmPermsFilterListGet: (orgId: number, params: RequestParams = {}) =>
      this.request<OrgsFilmPermissionListResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/rptuser/${orgId}/filmperms/filterlist`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение метаданных списка пользователей
     *
     * @tags Организации - Пользователи отчётами
     * @name OrgsRptUsersFilterMetadataGet
     * @request GET:/api/v1/orgs/rptuser/metadata
     */
    orgsRptUsersFilterMetadataGet: (params: RequestParams = {}) =>
      this.request<MetadataResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/rptuser/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение фильтрованного списка пользователей
     *
     * @tags Организации - Пользователи отчётами
     * @name OrgsRptUsersFilterListGet
     * @request GET:/api/v1/orgs/rptuser/filterlist
     */
    orgsRptUsersFilterListGet: (
      query?: {
        /**
         * ID страны
         * @format int64
         */
        nation_id?: number;
        /** ID или назание пользователя */
        orgname?: string;
        /** ИНН */
        inn?: string;
        /** Email */
        email?: string;
        /** Тестовый */
        test?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrgsRptUserListResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/rptuser/filterlist`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение метаданных списка прав на фильмы
     *
     * @tags Организации - Пользователи отчётами
     * @name OrgsRptUsersFilmPermsMetadataGet
     * @request GET:/api/v1/orgs/rptuser/filmperms/metadata
     */
    orgsRptUsersFilmPermsMetadataGet: (params: RequestParams = {}) =>
      this.request<MetadataResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/rptuser/filmperms/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение списка
     *
     * @tags Организации - Общее
     * @name OrgsRepertsGet
     * @request GET:/api/v1/orgs/reperts
     */
    orgsRepertsGet: (params: RequestParams = {}) =>
      this.request<OrgsRepert[], ErrorMessageResponse>({
        path: `/api/v1/orgs/reperts`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение списка
     *
     * @tags Организации - Общее
     * @name OrgsRegularsGet
     * @request GET:/api/v1/orgs/regulars
     */
    orgsRegularsGet: (params: RequestParams = {}) =>
      this.request<OrgsRegular[], ErrorMessageResponse>({
        path: `/api/v1/orgs/regulars`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение списка
     *
     * @tags Организации - Общее
     * @name OrgsMngmntFormsGet
     * @request GET:/api/v1/orgs/mngmntforms
     */
    orgsMngmntFormsGet: (params: RequestParams = {}) =>
      this.request<OrgsMngmntForm[], ErrorMessageResponse>({
        path: `/api/v1/orgs/mngmntforms`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение списка
     *
     * @tags Организации - Общее
     * @name OrgsLocationsGet
     * @request GET:/api/v1/orgs/locations
     */
    orgsLocationsGet: (params: RequestParams = {}) =>
      this.request<OrgsLocation[], ErrorMessageResponse>({
        path: `/api/v1/orgs/locations`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение данных о кинотеатрах киносети
     *
     * @tags Организации - Киносети
     * @name OrgsHoldingCinemasGet
     * @request GET:/api/v1/orgs/holding/{id}/cinemas
     */
    orgsHoldingCinemasGet: (id: number, params: RequestParams = {}) =>
      this.request<CinemaListResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/holding/${id}/cinemas`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение метаданных списка киносетей
     *
     * @tags Организации - Киносети
     * @name OrgsHoldingFilterMetadataGet
     * @request GET:/api/v1/orgs/holding/metadata
     */
    orgsHoldingFilterMetadataGet: (params: RequestParams = {}) =>
      this.request<MetadataResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/holding/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение фильтрованного списка киносетей
     *
     * @tags Организации - Киносети
     * @name OrgsHoldingFilterListGet
     * @request GET:/api/v1/orgs/holding/filterlist
     */
    orgsHoldingFilterListGet: (
      query?: {
        /**
         * ID киносети
         * @format int64
         */
        nation_id?: number;
        /** ID региона */
        region_id?: string;
        /** Название населенного пукта */
        nas_punkt?: string;
        /** ID или назание киносети */
        orgname?: string;
        /** email киносети */
        email?: string;
        /** Тип киносети */
        orgtype?: string;
        /**
         * ID поставщика ПО
         * @format int64
         */
        id_vnd?: number;
        /** Тестовая киносеть */
        test?: boolean;
        /** Закрыт */
        liquidate?: boolean;
        /** ID */
        registred?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<HoldingListResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/holding/filterlist`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение списка
     *
     * @tags Организации - Общее
     * @name OrgsDataIsValiidItemsGet
     * @request GET:/api/v1/orgs/dataisvaliditems
     */
    orgsDataIsValiidItemsGet: (params: RequestParams = {}) =>
      this.request<OrgsDataIsValidItem[], ErrorMessageResponse>({
        path: `/api/v1/orgs/dataisvaliditems`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение списка видеооборудования в кинотеатре
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaEqpmntVideoGet
     * @request GET:/api/v1/orgs/cinema/{orgId}/eqpmntvideo
     */
    orgsCinemaEqpmntVideoGet: (orgId: number, params: RequestParams = {}) =>
      this.request<EqpmntVideoResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/${orgId}/eqpmntvideo`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение списка аудиооборудования в кинотеатре
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaEqpmntAudioGet
     * @request GET:/api/v1/orgs/cinema/{orgId}/eqpmntaudio
     */
    orgsCinemaEqpmntAudioGet: (orgId: number, params: RequestParams = {}) =>
      this.request<EqpmntAudioResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/${orgId}/eqpmntaudio`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение списка версий кинозала
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaShowRoomVersGet
     * @request GET:/api/v1/orgs/cinema/showroomvers/{id}
     */
    orgsCinemaShowRoomVersGet: (id: number, params: RequestParams = {}) =>
      this.request<ShowRoomVersResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/showroomvers/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение метаданных списка кинозалов кинотеатра
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaShowRoomsMetadataGet
     * @request GET:/api/v1/orgs/cinema/showrooms/metadata
     */
    orgsCinemaShowRoomsMetadataGet: (params: RequestParams = {}) =>
      this.request<MetadataResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/showrooms/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение метаданных списка примечаний о кинотеатре
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaNotesMetadataGet
     * @request GET:/api/v1/orgs/cinema/notes/metadata
     */
    orgsCinemaNotesMetadataGet: (params: RequestParams = {}) =>
      this.request<MetadataResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/notes/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение метаданных списка кинотеатров
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaFilterMetadataGet
     * @request GET:/api/v1/orgs/cinema/metadata
     */
    orgsCinemaFilterMetadataGet: (params: RequestParams = {}) =>
      this.request<MetadataResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение фильтрованного списка кинотеатров
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaFilterListGet
     * @request GET:/api/v1/orgs/cinema/filterlist
     */
    orgsCinemaFilterListGet: (
      query?: {
        /**
         * ID киносети
         * @format int64
         */
        parent_org_id?: number;
        /**
         * ID страны
         * @format int64
         */
        nation_id?: number;
        /** ID региона */
        region_id?: string;
        /** Название населенного пукта */
        nas_punkt?: string;
        /** Название улицы */
        street_name?: string;
        /** Название киносети */
        hldname?: string;
        /** ID (список ID через запятую) или назание кинотеатра */
        orgname?: string;
        /** email кинотеатра */
        email?: string;
        /** Тестовый кинотеатр */
        test?: boolean;
        /** Закрыт */
        liquidate?: boolean;
        /** Билетная система автоматическая */
        automatic?: boolean;
        /** Ориг. рег. карты */
        original_dog?: boolean;
        /** Отчитывается */
        isreported?: boolean;
        /** Молчит 7 дней */
        whereisdata?: boolean;
        /**
         * ID формы собственности
         * @format int64
         */
        id_prop?: number;
        /**
         * ID поставщика ПО
         * @format int64
         */
        id_vnd?: number;
        /** ID типа киносети */
        orgtype?: string;
        /** Название юр.лица */
        orgname_jur?: string;
        /** ИНН */
        inn?: string;
        /** Поддержан ФК */
        fksupported?: boolean;
        /** НП Культура */
        npculture?: boolean;
        /** Состояние выверки */
        verState?: string;
        /** Закрыт оператором */
        operator_state_id?: boolean;
        /** Online */
        isonline?: boolean;
        /** Цифровой да/нет/неопределено */
        dataisvalid?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CinemaListResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/filterlist`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение метаданных списка видеооборудования в кинотеатре
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaEqpmntVideoMetadataGet
     * @request GET:/api/v1/orgs/cinema/eqpmntvideo/metadata
     */
    orgsCinemaEqpmntVideoMetadataGet: (params: RequestParams = {}) =>
      this.request<MetadataResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/eqpmntvideo/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение метаданных списка аудиооборудования в кинотеатре
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaEqpmntAudioMetadataGet
     * @request GET:/api/v1/orgs/cinema/eqpmntaudio/metadata
     */
    orgsCinemaEqpmntAudioMetadataGet: (params: RequestParams = {}) =>
      this.request<MetadataResponse, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/eqpmntaudio/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение списка справочников в разделе НСИ
     *
     * @tags API НСИ v1
     * @name Nsi
     * @request GET:/api/v1/nsi
     */
    nsi: (params: RequestParams = {}) =>
      this.request<NsiListResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение метаданных справочника
     *
     * @tags API НСИ v1
     * @name NsiIdMetadataGet
     * @request GET:/api/v1/nsi/{id}/metadata
     */
    nsiIdMetadataGet: (id: string, params: RequestParams = {}) =>
      this.request<MetadataResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi/${id}/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных справочника ПУ
     *
     * @tags API НСИ v1
     * @name NsiPusGet
     * @request GET:/api/v1/nsi/pus
     */
    nsiPusGet: (
      query?: {
        /** Начало ПУ */
        issued_from?: string;
        /** Окончание ПУ */
        issued_to?: string;
        /** Номер ПУ */
        pu_num?: string;
        /** Название фильма */
        rent_name?: string;
        /** Год выпуска */
        prod_year?: string;
        /** Страна производитель */
        madein?: string;
        /** Студия */
        studia?: string;
        /** Жанр */
        genre?: string;
        /** Ограничения */
        view_restr?: string;
        /** Правообладатели */
        distributors?: string;
        /** Категория */
        film_category?: string;
        /** Категория проката */
        rent_category?: string;
        /** Дистрибьютор */
        distribs?: string;
        /** Только вручную */
        onlymanual?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PusResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi/pus`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение данных справочника фильмов
     *
     * @tags API НСИ v1
     * @name NsiFilmsGet
     * @request GET:/api/v1/nsi/films
     */
    nsiFilmsGet: (
      query?: {
        /** Название фильма */
        film_name?: string;
        /** Только вручную */
        onlymanual?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FilmsResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi/films`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение данных справочника прокатчиков
     *
     * @tags API НСИ v1
     * @name NsiDistribsGet
     * @request GET:/api/v1/nsi/distribs
     */
    nsiDistribsGet: (
      query?: {
        /** Название фильма */
        aname?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DistribsResponse, ErrorMessageResponse>({
        path: `/api/v1/nsi/distribs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение списка всех оповещений
     *
     * @tags API НСИ v1
     * @name NotificationsUreadedGet
     * @request GET:/api/v1/notifications/unreaded
     */
    notificationsUreadedGet: (params: RequestParams = {}) =>
      this.request<AllNotificationMessage[], ErrorMessageResponse>({
        path: `/api/v1/notifications/unreaded`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение новых оповещений
     *
     * @tags API НСИ v1
     * @name NotificationsNewGet
     * @request GET:/api/v1/notifications/new
     */
    notificationsNewGet: (params: RequestParams = {}) =>
      this.request<NotificationMessage[][], ErrorMessageResponse>({
        path: `/api/v1/notifications/new`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение списка всех оповещений
     *
     * @tags API НСИ v1
     * @name NotificationsAllGet
     * @request GET:/api/v1/notifications/all
     */
    notificationsAllGet: (params: RequestParams = {}) =>
      this.request<AllNotificationMessage[], ErrorMessageResponse>({
        path: `/api/v1/notifications/all`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение основного меню
     *
     * @tags API UI
     * @name MainMenuGet
     * @request GET:/api/v1/menu/main
     */
    mainMenuGet: (params: RequestParams = {}) =>
      this.request<MenuItem[], ErrorMessageResponse>({
        path: `/api/v1/menu/main`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Получение данных по протоколам загрузки
     *
     * @tags API Статистика по загрузке данных v1
     * @name LoadLogGet
     * @request GET:/api/v1/loadstat/loadlog
     */
    loadLogGet: (
      query: {
        /**
         * Страница
         * @format int32
         * @default 1
         */
        page: number;
        /**
         * Количество элементов на странице
         * @format int32
         * @default 10
         */
        limit: number;
        /**
         * ID кинотеатра
         * @format int32
         */
        force_org_id: number;
        /**
         * Дата начала
         * @format date-time
         */
        reg_from: string;
        /**
         * Дата окончания
         * @format date-time
         */
        reg_to: string;
        /** ID организации - поставщика информации */
        org_id?: string;
        /** ID киносети демонстратора */
        sess_prnt_org_id?: string;
        /** ID демонстратора */
        sess_org_id?: string;
        /** Имя пакета с данными */
        packet_name?: string;
        /** ip адрес */
        ip?: string;
        /** Фильтр по стстоянию пакета */
        cur_pstate?: string;
        /** Сообщение об ошибке */
        message?: string;
        /** Метод загрузки пакета */
        load_method?: string;
        /** Только тестовые кинотеатры */
        test?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LoadStatListResponse, ErrorMessageResponse>({
        path: `/api/v1/loadstat/loadlog`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
 * @description Получение списка
 *
 * @tags Списки
 * @name GetList
 * @summary <b>regions</b> - регионы
<b>nations</b> - страны
<b>ownerships</b> - формы собственности
<b>corgtypes</b> - типы организаций для кинотеатров
<b>horgtypes</b> - типы организаций для киносетей
<b>softvendors</b> - поставщики ПО
<b>locations</b> - типы расположений кинотеартов
<b>regularshows</b> - регулярности кинопоказов
<b>reperts</b> - репертуары???
<b>usertypes</b> - типы прав пользователей
<b>threestates</b> - три значения 'не определено', 'нет' и 'да'
<b>inns</b> - ИНН организаций
<b>holdings</b> - список киносетей
<b>naspunkts</b> - список нас. пунктов организаций
<b>jurorgs</b> - список юр. лиц организаций
<b>orgstreets</b> - список улиц организаций

Параметр <b>nationId</b> применим к справочникам <b>regions</b>,<b>naspunkts</b>.
Параметр <b>nasPunkt</b> применим к справочнику <b>orgstreets</b>.
 * @request GET:/api/v1/list/{name}
 */
    getList: (
      name: string,
      query?: {
        /** Строка для фильтрации */
        filter?: string;
        /** Фильтр по названию улиц */
        nasPunkt?: string;
        /**
         * ID страны
         * @format int64
         */
        nationId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ListResponse, ErrorMessageResponse>({
        path: `/api/v1/list/${name}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение списка сеансов
     *
     * @tags API Реестр фильмов v1
     * @name FilmsregListGet
     * @request GET:/api/v1/filmsreg
     */
    filmsregListGet: (
      query: {
        /**
         * Страница
         * @format int32
         * @default 1
         */
        page: number;
        /**
         * Количество элементов на странице
         * @format int32
         * @default 10
         */
        limit: number;
        /**
         * Дата начала
         * @format date
         */
        seld_from?: string;
        /**
         * Дата окончания
         * @format date
         */
        seld_to?: string;
        /** Название фильма */
        filmname?: string;
        /** Название киносети */
        holding?: string;
        /** Название кинотеатра */
        org?: string;
        /**
         * Код состояния (битовая маска)
         * @format int32
         * @example 0
         */
        pu_verified?: number;
        /** Сортировка */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FilmsRegListResponse, ErrorMessageResponse>({
        path: `/api/v1/filmsreg`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение реестра фильмов
     *
     * @tags API Реестр фильмов v1
     * @name FilmsregRegistryGet
     * @request GET:/api/v1/filmsreg/registry
     */
    filmsregRegistryGet: (
      query: {
        /**
         * Страница
         * @format int32
         * @default 1
         */
        page: number;
        /**
         * Количество элементов на странице
         * @format int32
         * @default 10
         */
        limit: number;
        /** Номер ПУ */
        pu_num?: string;
        /** Название фильма */
        name_rus?: string;
        /** Год выпуска */
        prod_year?: string;
        /** Режиссер */
        mdirector?: string;
        /** Страна */
        madein?: string;
        /** Студия */
        studia?: string;
        /** Жанр */
        genre?: string;
        /** Сортировка */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FilmsRegRegistryListItem[], ErrorMessageResponse>({
        path: `/api/v1/filmsreg/registry`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение списка пакетов по сеансу
     *
     * @tags API Реестр фильмов v1
     * @name FilmsregPacketsGet
     * @request GET:/api/v1/filmsreg/packets
     */
    filmsregPacketsGet: (
      query: {
        /**
         * Страница
         * @format int32
         * @default 1
         */
        page: number;
        /**
         * Количество элементов на странице
         * @format int32
         * @default 10
         */
        limit: number;
        /** Ключ партиции */
        part_key: string;
        /**
         * ID сеанса фильма
         * @format int32
         */
        sess_id: number;
        /** Сортировка */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FilmsRegPacketsListItem[], ErrorMessageResponse>({
        path: `/api/v1/filmsreg/packets`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение данных статистики по билетам
     *
     * @tags API Статистика по билетам v1
     * @name DatastatSessionsGet
     * @request GET:/api/v1/datastat
     */
    datastatSessionsGet: (
      query: {
        /**
         * Страница
         * @format int32
         * @default 1
         */
        page: number;
        /**
         * Количество элементов на странице
         * @format int32
         * @default 10
         */
        limit: number;
        /**
         * ID кинотеатра
         * @format int32
         */
        force_org_id: number;
        /**
         * Дата начала
         * @format date-time
         */
        reg_from: string;
        /**
         * Дата окончания
         * @format date-time
         */
        reg_to: string;
        /** Строка поиска в названии фильма */
        film?: string;
        /**
         * ID кинозала
         * @format int64
         */
        sroom_id?: number;
        /** Сортировка */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DataStatListResponse, ErrorMessageResponse>({
        path: `/api/v1/datastat`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение данных по билетам за сеанс
     *
     * @tags API Статистика по билетам v1
     * @name DatastatTicketsGet
     * @request GET:/api/v1/datastat/tickets
     */
    datastatTicketsGet: (
      query: {
        /**
         * Страница
         * @format int32
         */
        page?: number;
        /**
         * Количество элементов на странице
         * @format int32
         */
        limit?: number;
        /** ID партиции */
        part_key: string;
        /**
         * ID сеанса
         * @format int32
         */
        sess_id: number;
        /**
         * Показывать или нет удалённые
         * @format int32
         * @default 0
         */
        hidedeleted?: number;
        /** Сортировка */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DataStatTickets[], ErrorMessageResponse>({
        path: `/api/v1/datastat/tickets`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Получение списка кинозалов кинотеатра
     *
     * @tags API Статистика по билетам v1
     * @name DatastatOrgSRoomsGet
     * @request GET:/api/v1/datastat/orgs/{org_id}/srooms
     */
    datastatOrgSRoomsGet: (orgId: number, params: RequestParams = {}) =>
      this.request<DataStatSRooms[], ErrorMessageResponse>({
        path: `/api/v1/datastat/orgs/${orgId}/srooms`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Удалить данные о праве на фильм
     *
     * @tags Организации - Пользователи отчётами
     * @name OrgsRptUsersFilmPermsDel
     * @request DELETE:/api/v1/orgs/rptuser/filmperms/{permId}
     */
    orgsRptUsersFilmPermsDel: (permId: number, params: RequestParams = {}) =>
      this.request<number, ErrorMessageResponse>({
        path: `/api/v1/orgs/rptuser/filmperms/${permId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Удалить данные о примечании о кинотеатре
     *
     * @tags Организации - Кинотеатры
     * @name OrgsCinemaNotesDel
     * @request DELETE:/api/v1/orgs/cinema/notes/{id}
     */
    orgsCinemaNotesDel: (id: number, params: RequestParams = {}) =>
      this.request<number, ErrorMessageResponse>({
        path: `/api/v1/orgs/cinema/notes/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  auth = {
    /**
     * @description Вход в систему для зарегистрированных пользователей
     *
     * @tags login-controller-v-1
     * @name Login
     * @request POST:/auth/v1/login
     */
    login: (data: IdentificationUserData, params: RequestParams = {}) =>
      this.request<LoginResult, ErrorMessageResponse>({
        path: `/auth/v1/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Вход в систему для не зарегистрированных пользователей
     *
     * @tags login-controller-v-1
     * @name LoginGuest
     * @request POST:/auth/v1/loginGuest
     */
    loginGuest: (data: IdentificationGuestData, params: RequestParams = {}) =>
      this.request<LoginResult, ErrorMessageResponse>({
        path: `/auth/v1/loginGuest`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Состояние
     *
     * @tags login-controller-v-1
     * @name Status
     * @request GET:/auth/v1
     */
    status: (params: RequestParams = {}) =>
      this.request<LoginResult, ErrorMessageResponse>({
        path: `/auth/v1`,
        method: "GET",
        ...params,
      }),
  };
}
