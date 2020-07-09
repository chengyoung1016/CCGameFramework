import Long from "../long/Long.js";
import * as $protobuf from "../protobuf/protobuf.min";
/** Namespace jubian. */
export namespace jubian {

    /** Namespace model. */
    namespace model {

        /** Properties of a StringRequest. */
        interface IStringRequest {

            /** StringRequest str_value */
            str_value?: (string|null);
        }

        /** Represents a StringRequest. */
        class StringRequest implements IStringRequest {

            /**
             * Constructs a new StringRequest.
             * @param [p] Properties to set
             */
            constructor(p?: jubian.model.IStringRequest);

            /** StringRequest str_value. */
            public str_value: string;

            /**
             * Encodes the specified StringRequest message. Does not implicitly {@link jubian.model.StringRequest.verify|verify} messages.
             * @param m StringRequest message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: jubian.model.IStringRequest, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringRequest message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns StringRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.model.StringRequest;

            /**
             * Creates a StringRequest message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns StringRequest
             */
            public static fromObject(d: { [k: string]: any }): jubian.model.StringRequest;

            /**
             * Creates a plain object from a StringRequest message. Also converts values to other types if specified.
             * @param m StringRequest
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: jubian.model.StringRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MetaDataRequest. */
        interface IMetaDataRequest {

            /** MetaDataRequest metadata */
            metadata?: ({ [k: string]: string }|null);
        }

        /** Represents a MetaDataRequest. */
        class MetaDataRequest implements IMetaDataRequest {

            /**
             * Constructs a new MetaDataRequest.
             * @param [p] Properties to set
             */
            constructor(p?: jubian.model.IMetaDataRequest);

            /** MetaDataRequest metadata. */
            public metadata: { [k: string]: string };

            /**
             * Encodes the specified MetaDataRequest message. Does not implicitly {@link jubian.model.MetaDataRequest.verify|verify} messages.
             * @param m MetaDataRequest message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: jubian.model.IMetaDataRequest, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MetaDataRequest message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns MetaDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.model.MetaDataRequest;

            /**
             * Creates a MetaDataRequest message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns MetaDataRequest
             */
            public static fromObject(d: { [k: string]: any }): jubian.model.MetaDataRequest;

            /**
             * Creates a plain object from a MetaDataRequest message. Also converts values to other types if specified.
             * @param m MetaDataRequest
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: jubian.model.MetaDataRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MetaDataRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MetaDataResponse. */
        interface IMetaDataResponse {

            /** MetaDataResponse metadata */
            metadata?: ({ [k: string]: string }|null);
        }

        /** Represents a MetaDataResponse. */
        class MetaDataResponse implements IMetaDataResponse {

            /**
             * Constructs a new MetaDataResponse.
             * @param [p] Properties to set
             */
            constructor(p?: jubian.model.IMetaDataResponse);

            /** MetaDataResponse metadata. */
            public metadata: { [k: string]: string };

            /**
             * Encodes the specified MetaDataResponse message. Does not implicitly {@link jubian.model.MetaDataResponse.verify|verify} messages.
             * @param m MetaDataResponse message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: jubian.model.IMetaDataResponse, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MetaDataResponse message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns MetaDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.model.MetaDataResponse;

            /**
             * Creates a MetaDataResponse message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns MetaDataResponse
             */
            public static fromObject(d: { [k: string]: any }): jubian.model.MetaDataResponse;

            /**
             * Creates a plain object from a MetaDataResponse message. Also converts values to other types if specified.
             * @param m MetaDataResponse
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: jubian.model.MetaDataResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MetaDataResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PageRequest. */
        interface IPageRequest {

            /** PageRequest params */
            params?: ({ [k: string]: string }|null);

            /** PageRequest options */
            options?: (jubian.model.IQueryOptions|null);
        }

        /** Represents a PageRequest. */
        class PageRequest implements IPageRequest {

            /**
             * Constructs a new PageRequest.
             * @param [p] Properties to set
             */
            constructor(p?: jubian.model.IPageRequest);

            /** PageRequest params. */
            public params: { [k: string]: string };

            /** PageRequest options. */
            public options?: (jubian.model.IQueryOptions|null);

            /**
             * Encodes the specified PageRequest message. Does not implicitly {@link jubian.model.PageRequest.verify|verify} messages.
             * @param m PageRequest message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: jubian.model.IPageRequest, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PageRequest message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns PageRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.model.PageRequest;

            /**
             * Creates a PageRequest message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns PageRequest
             */
            public static fromObject(d: { [k: string]: any }): jubian.model.PageRequest;

            /**
             * Creates a plain object from a PageRequest message. Also converts values to other types if specified.
             * @param m PageRequest
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: jubian.model.PageRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PageRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResultResponse. */
        interface IResultResponse {

            /** ResultResponse result */
            result?: (number|null);
        }

        /** Represents a ResultResponse. */
        class ResultResponse implements IResultResponse {

            /**
             * Constructs a new ResultResponse.
             * @param [p] Properties to set
             */
            constructor(p?: jubian.model.IResultResponse);

            /** ResultResponse result. */
            public result: number;

            /**
             * Encodes the specified ResultResponse message. Does not implicitly {@link jubian.model.ResultResponse.verify|verify} messages.
             * @param m ResultResponse message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: jubian.model.IResultResponse, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResultResponse message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.model.ResultResponse;

            /**
             * Creates a ResultResponse message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns ResultResponse
             */
            public static fromObject(d: { [k: string]: any }): jubian.model.ResultResponse;

            /**
             * Creates a plain object from a ResultResponse message. Also converts values to other types if specified.
             * @param m ResultResponse
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: jubian.model.ResultResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResultResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestByToken. */
        interface IRequestByToken {

            /** RequestByToken access_token */
            access_token?: (string|null);
        }

        /** Represents a RequestByToken. */
        class RequestByToken implements IRequestByToken {

            /**
             * Constructs a new RequestByToken.
             * @param [p] Properties to set
             */
            constructor(p?: jubian.model.IRequestByToken);

            /** RequestByToken access_token. */
            public access_token: string;

            /**
             * Encodes the specified RequestByToken message. Does not implicitly {@link jubian.model.RequestByToken.verify|verify} messages.
             * @param m RequestByToken message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: jubian.model.IRequestByToken, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestByToken message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RequestByToken
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.model.RequestByToken;

            /**
             * Creates a RequestByToken message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns RequestByToken
             */
            public static fromObject(d: { [k: string]: any }): jubian.model.RequestByToken;

            /**
             * Creates a plain object from a RequestByToken message. Also converts values to other types if specified.
             * @param m RequestByToken
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: jubian.model.RequestByToken, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestByToken to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestByIds. */
        interface IRequestByIds {

            /** RequestByIds ids */
            ids?: (string[]|null);
        }

        /** Represents a RequestByIds. */
        class RequestByIds implements IRequestByIds {

            /**
             * Constructs a new RequestByIds.
             * @param [p] Properties to set
             */
            constructor(p?: jubian.model.IRequestByIds);

            /** RequestByIds ids. */
            public ids: string[];

            /**
             * Encodes the specified RequestByIds message. Does not implicitly {@link jubian.model.RequestByIds.verify|verify} messages.
             * @param m RequestByIds message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: jubian.model.IRequestByIds, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestByIds message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RequestByIds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.model.RequestByIds;

            /**
             * Creates a RequestByIds message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns RequestByIds
             */
            public static fromObject(d: { [k: string]: any }): jubian.model.RequestByIds;

            /**
             * Creates a plain object from a RequestByIds message. Also converts values to other types if specified.
             * @param m RequestByIds
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: jubian.model.RequestByIds, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestByIds to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryOptions. */
        interface IQueryOptions {

            /** QueryOptions page */
            page?: (number|null);

            /** QueryOptions count */
            count?: (number|null);

            /** QueryOptions max_id */
            max_id?: (number|Long|null);

            /** QueryOptions since_id */
            since_id?: (number|Long|null);
        }

        /** Represents a QueryOptions. */
        class QueryOptions implements IQueryOptions {

            /**
             * Constructs a new QueryOptions.
             * @param [p] Properties to set
             */
            constructor(p?: jubian.model.IQueryOptions);

            /** QueryOptions page. */
            public page: number;

            /** QueryOptions count. */
            public count: number;

            /** QueryOptions max_id. */
            public max_id: (number|Long);

            /** QueryOptions since_id. */
            public since_id: (number|Long);

            /**
             * Encodes the specified QueryOptions message. Does not implicitly {@link jubian.model.QueryOptions.verify|verify} messages.
             * @param m QueryOptions message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: jubian.model.IQueryOptions, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryOptions message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns QueryOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.model.QueryOptions;

            /**
             * Creates a QueryOptions message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns QueryOptions
             */
            public static fromObject(d: { [k: string]: any }): jubian.model.QueryOptions;

            /**
             * Creates a plain object from a QueryOptions message. Also converts values to other types if specified.
             * @param m QueryOptions
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: jubian.model.QueryOptions, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace golottery. */
    namespace golottery {

        /** Namespace srv. */
        namespace srv {

            /** Namespace room. */
            namespace room {

                /** RoomType enum. */
                enum RoomType {
                    NONE = 0
                }

                /** Properties of a Room. */
                interface IRoom {

                    /** Room id */
                    id?: (number|Long|null);

                    /** Room server_id */
                    server_id?: (string|null);

                    /** Room nodes */
                    nodes?: (jubian.golottery.srv.room.ITableInfo[]|null);
                }

                /** Represents a Room. */
                class Room implements IRoom {

                    /**
                     * Constructs a new Room.
                     * @param [p] Properties to set
                     */
                    constructor(p?: jubian.golottery.srv.room.IRoom);

                    /** Room id. */
                    public id: (number|Long);

                    /** Room server_id. */
                    public server_id: string;

                    /** Room nodes. */
                    public nodes: jubian.golottery.srv.room.ITableInfo[];

                    /**
                     * Encodes the specified Room message. Does not implicitly {@link jubian.golottery.srv.room.Room.verify|verify} messages.
                     * @param m Room message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: jubian.golottery.srv.room.IRoom, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Room message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Room
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.golottery.srv.room.Room;

                    /**
                     * Creates a Room message from a plain object. Also converts values to their respective internal types.
                     * @param d Plain object
                     * @returns Room
                     */
                    public static fromObject(d: { [k: string]: any }): jubian.golottery.srv.room.Room;

                    /**
                     * Creates a plain object from a Room message. Also converts values to other types if specified.
                     * @param m Room
                     * @param [o] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(m: jubian.golottery.srv.room.Room, o?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Room to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TableInfo. */
                interface ITableInfo {

                    /** TableInfo id */
                    id?: (number|Long|null);

                    /** TableInfo server_id */
                    server_id?: (string|null);

                    /** TableInfo transaction_id */
                    transaction_id?: (number|Long|null);
                }

                /** Represents a TableInfo. */
                class TableInfo implements ITableInfo {

                    /**
                     * Constructs a new TableInfo.
                     * @param [p] Properties to set
                     */
                    constructor(p?: jubian.golottery.srv.room.ITableInfo);

                    /** TableInfo id. */
                    public id: (number|Long);

                    /** TableInfo server_id. */
                    public server_id: string;

                    /** TableInfo transaction_id. */
                    public transaction_id: (number|Long);

                    /**
                     * Encodes the specified TableInfo message. Does not implicitly {@link jubian.golottery.srv.room.TableInfo.verify|verify} messages.
                     * @param m TableInfo message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: jubian.golottery.srv.room.ITableInfo, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TableInfo message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns TableInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.golottery.srv.room.TableInfo;

                    /**
                     * Creates a TableInfo message from a plain object. Also converts values to their respective internal types.
                     * @param d Plain object
                     * @returns TableInfo
                     */
                    public static fromObject(d: { [k: string]: any }): jubian.golottery.srv.room.TableInfo;

                    /**
                     * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
                     * @param m TableInfo
                     * @param [o] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(m: jubian.golottery.srv.room.TableInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TableInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a JoinRoom. */
                interface IJoinRoom {

                    /** JoinRoom room_no */
                    room_no?: (string|null);

                    /** JoinRoom room_type */
                    room_type?: (jubian.golottery.srv.room.RoomType|null);
                }

                /** Represents a JoinRoom. */
                class JoinRoom implements IJoinRoom {

                    /**
                     * Constructs a new JoinRoom.
                     * @param [p] Properties to set
                     */
                    constructor(p?: jubian.golottery.srv.room.IJoinRoom);

                    /** JoinRoom room_no. */
                    public room_no: string;

                    /** JoinRoom room_type. */
                    public room_type: jubian.golottery.srv.room.RoomType;

                    /**
                     * Encodes the specified JoinRoom message. Does not implicitly {@link jubian.golottery.srv.room.JoinRoom.verify|verify} messages.
                     * @param m JoinRoom message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: jubian.golottery.srv.room.IJoinRoom, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JoinRoom message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns JoinRoom
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.golottery.srv.room.JoinRoom;

                    /**
                     * Creates a JoinRoom message from a plain object. Also converts values to their respective internal types.
                     * @param d Plain object
                     * @returns JoinRoom
                     */
                    public static fromObject(d: { [k: string]: any }): jubian.golottery.srv.room.JoinRoom;

                    /**
                     * Creates a plain object from a JoinRoom message. Also converts values to other types if specified.
                     * @param m JoinRoom
                     * @param [o] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(m: jubian.golottery.srv.room.JoinRoom, o?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JoinRoom to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace oauth2. */
            namespace oauth2 {

                /** Properties of a Token. */
                interface IToken {

                    /** Token access_token */
                    access_token?: (string|null);

                    /** Token token_type */
                    token_type?: (string|null);

                    /** Token refresh_token */
                    refresh_token?: (string|null);

                    /** Token expires_at */
                    expires_at?: (number|Long|null);

                    /** Token scopes */
                    scopes?: (string[]|null);

                    /** Token metadata */
                    metadata?: ({ [k: string]: string }|null);
                }

                /** Represents a Token. */
                class Token implements IToken {

                    /**
                     * Constructs a new Token.
                     * @param [p] Properties to set
                     */
                    constructor(p?: jubian.golottery.srv.oauth2.IToken);

                    /** Token access_token. */
                    public access_token: string;

                    /** Token token_type. */
                    public token_type: string;

                    /** Token refresh_token. */
                    public refresh_token: string;

                    /** Token expires_at. */
                    public expires_at: (number|Long);

                    /** Token scopes. */
                    public scopes: string[];

                    /** Token metadata. */
                    public metadata: { [k: string]: string };

                    /**
                     * Encodes the specified Token message. Does not implicitly {@link jubian.golottery.srv.oauth2.Token.verify|verify} messages.
                     * @param m Token message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: jubian.golottery.srv.oauth2.IToken, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Token message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.golottery.srv.oauth2.Token;

                    /**
                     * Creates a Token message from a plain object. Also converts values to their respective internal types.
                     * @param d Plain object
                     * @returns Token
                     */
                    public static fromObject(d: { [k: string]: any }): jubian.golottery.srv.oauth2.Token;

                    /**
                     * Creates a plain object from a Token message. Also converts values to other types if specified.
                     * @param m Token
                     * @param [o] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(m: jubian.golottery.srv.oauth2.Token, o?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Token to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        /** Namespace model. */
        namespace model {

            /** Namespace profile. */
            namespace profile {

                /** Properties of a Profile. */
                interface IProfile {

                    /** Profile id */
                    id?: (number|Long|null);

                    /** Profile username */
                    username?: (string|null);

                    /** Profile nickname */
                    nickname?: (string|null);

                    /** Profile province */
                    province?: (number|null);

                    /** Profile city */
                    city?: (number|null);

                    /** Profile location */
                    location?: (string|null);

                    /** Profile location_id */
                    location_id?: (number|null);

                    /** Profile description */
                    description?: (string|null);

                    /** Profile profile_image_url */
                    profile_image_url?: (string|null);

                    /** Profile gender */
                    gender?: (string|null);

                    /** Profile create_time */
                    create_time?: (number|Long|null);

                    /** Profile updated */
                    updated?: (number|Long|null);

                    /** Profile geo_enabled */
                    geo_enabled?: (boolean|null);

                    /** Profile role */
                    role?: (jubian.golottery.model.profile.RoleType|null);

                    /** Profile homepage */
                    homepage?: (string|null);

                    /** Profile metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** Profile group */
                    group?: (jubian.golottery.model.profile.IOrganization|null);
                }

                /** Represents a Profile. */
                class Profile implements IProfile {

                    /**
                     * Constructs a new Profile.
                     * @param [p] Properties to set
                     */
                    constructor(p?: jubian.golottery.model.profile.IProfile);

                    /** Profile id. */
                    public id: (number|Long);

                    /** Profile username. */
                    public username: string;

                    /** Profile nickname. */
                    public nickname: string;

                    /** Profile province. */
                    public province: number;

                    /** Profile city. */
                    public city: number;

                    /** Profile location. */
                    public location: string;

                    /** Profile location_id. */
                    public location_id: number;

                    /** Profile description. */
                    public description: string;

                    /** Profile profile_image_url. */
                    public profile_image_url: string;

                    /** Profile gender. */
                    public gender: string;

                    /** Profile create_time. */
                    public create_time: (number|Long);

                    /** Profile updated. */
                    public updated: (number|Long);

                    /** Profile geo_enabled. */
                    public geo_enabled: boolean;

                    /** Profile role. */
                    public role: jubian.golottery.model.profile.RoleType;

                    /** Profile homepage. */
                    public homepage: string;

                    /** Profile metadata. */
                    public metadata: { [k: string]: string };

                    /** Profile group. */
                    public group?: (jubian.golottery.model.profile.IOrganization|null);

                    /**
                     * Encodes the specified Profile message. Does not implicitly {@link jubian.golottery.model.profile.Profile.verify|verify} messages.
                     * @param m Profile message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: jubian.golottery.model.profile.IProfile, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Profile message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Profile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.golottery.model.profile.Profile;

                    /**
                     * Creates a Profile message from a plain object. Also converts values to their respective internal types.
                     * @param d Plain object
                     * @returns Profile
                     */
                    public static fromObject(d: { [k: string]: any }): jubian.golottery.model.profile.Profile;

                    /**
                     * Creates a plain object from a Profile message. Also converts values to other types if specified.
                     * @param m Profile
                     * @param [o] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(m: jubian.golottery.model.profile.Profile, o?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Profile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Organization. */
                interface IOrganization {

                    /** Organization id */
                    id?: (number|Long|null);

                    /** Organization type */
                    type?: (number|null);

                    /** Organization sales_shop_id */
                    sales_shop_id?: (number|Long|null);

                    /** Organization owner_id */
                    owner_id?: (number|Long|null);

                    /** Organization owner_name */
                    owner_name?: (string|null);

                    /** Organization lisense_id */
                    lisense_id?: (string|null);

                    /** Organization phone */
                    phone?: (string|null);

                    /** Organization username */
                    username?: (string|null);

                    /** Organization brief_name */
                    brief_name?: (string|null);

                    /** Organization qrcode_url */
                    qrcode_url?: (string|null);

                    /** Organization share_url */
                    share_url?: (string|null);

                    /** Organization profile_image_url */
                    profile_image_url?: (string|null);

                    /** Organization homepage */
                    homepage?: (string|null);

                    /** Organization address */
                    address?: (string|null);

                    /** Organization metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** Organization description */
                    description?: (string|null);

                    /** Organization lat */
                    lat?: (number|null);

                    /** Organization lon */
                    lon?: (number|null);

                    /** Organization location */
                    location?: (string|null);

                    /** Organization location_id */
                    location_id?: (number|null);

                    /** Organization create_time */
                    create_time?: (number|Long|null);

                    /** Organization updated */
                    updated?: (number|Long|null);

                    /** Organization role */
                    role?: (jubian.golottery.model.profile.RoleType|null);

                    /** Organization rights */
                    rights?: (jubian.golottery.model.profile.RightType[]|null);
                }

                /** Represents an Organization. */
                class Organization implements IOrganization {

                    /**
                     * Constructs a new Organization.
                     * @param [p] Properties to set
                     */
                    constructor(p?: jubian.golottery.model.profile.IOrganization);

                    /** Organization id. */
                    public id: (number|Long);

                    /** Organization type. */
                    public type: number;

                    /** Organization sales_shop_id. */
                    public sales_shop_id: (number|Long);

                    /** Organization owner_id. */
                    public owner_id: (number|Long);

                    /** Organization owner_name. */
                    public owner_name: string;

                    /** Organization lisense_id. */
                    public lisense_id: string;

                    /** Organization phone. */
                    public phone: string;

                    /** Organization username. */
                    public username: string;

                    /** Organization brief_name. */
                    public brief_name: string;

                    /** Organization qrcode_url. */
                    public qrcode_url: string;

                    /** Organization share_url. */
                    public share_url: string;

                    /** Organization profile_image_url. */
                    public profile_image_url: string;

                    /** Organization homepage. */
                    public homepage: string;

                    /** Organization address. */
                    public address: string;

                    /** Organization metadata. */
                    public metadata: { [k: string]: string };

                    /** Organization description. */
                    public description: string;

                    /** Organization lat. */
                    public lat: number;

                    /** Organization lon. */
                    public lon: number;

                    /** Organization location. */
                    public location: string;

                    /** Organization location_id. */
                    public location_id: number;

                    /** Organization create_time. */
                    public create_time: (number|Long);

                    /** Organization updated. */
                    public updated: (number|Long);

                    /** Organization role. */
                    public role: jubian.golottery.model.profile.RoleType;

                    /** Organization rights. */
                    public rights: jubian.golottery.model.profile.RightType[];

                    /**
                     * Encodes the specified Organization message. Does not implicitly {@link jubian.golottery.model.profile.Organization.verify|verify} messages.
                     * @param m Organization message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: jubian.golottery.model.profile.IOrganization, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Organization message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns Organization
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.golottery.model.profile.Organization;

                    /**
                     * Creates an Organization message from a plain object. Also converts values to their respective internal types.
                     * @param d Plain object
                     * @returns Organization
                     */
                    public static fromObject(d: { [k: string]: any }): jubian.golottery.model.profile.Organization;

                    /**
                     * Creates a plain object from an Organization message. Also converts values to other types if specified.
                     * @param m Organization
                     * @param [o] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(m: jubian.golottery.model.profile.Organization, o?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Organization to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** RoleType enum. */
                enum RoleType {
                    USER = 0,
                    BOSS = 1,
                    EMPLOYEE = 2,
                    KOL = 3,
                    CAPTAIN = 4
                }

                /** RightType enum. */
                enum RightType {
                    AVAILABLE = 0,
                    DISABLE = 1,
                    FORBIDDEN_CHAT = 2,
                    FORBIDDEN_PUBLISH = 3,
                    BLACKLIST = 4,
                    FORBIDDEN_OPER = 5
                }

                /** Properties of a ProfileResponse. */
                interface IProfileResponse {

                    /** ProfileResponse profiles */
                    profiles?: (jubian.golottery.model.profile.IProfile[]|null);
                }

                /** Represents a ProfileResponse. */
                class ProfileResponse implements IProfileResponse {

                    /**
                     * Constructs a new ProfileResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: jubian.golottery.model.profile.IProfileResponse);

                    /** ProfileResponse profiles. */
                    public profiles: jubian.golottery.model.profile.IProfile[];

                    /**
                     * Encodes the specified ProfileResponse message. Does not implicitly {@link jubian.golottery.model.profile.ProfileResponse.verify|verify} messages.
                     * @param m ProfileResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: jubian.golottery.model.profile.IProfileResponse, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProfileResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ProfileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.golottery.model.profile.ProfileResponse;

                    /**
                     * Creates a ProfileResponse message from a plain object. Also converts values to their respective internal types.
                     * @param d Plain object
                     * @returns ProfileResponse
                     */
                    public static fromObject(d: { [k: string]: any }): jubian.golottery.model.profile.ProfileResponse;

                    /**
                     * Creates a plain object from a ProfileResponse message. Also converts values to other types if specified.
                     * @param m ProfileResponse
                     * @param [o] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(m: jubian.golottery.model.profile.ProfileResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProfileResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OrganizationResponse. */
                interface IOrganizationResponse {

                    /** OrganizationResponse groups */
                    groups?: (jubian.golottery.model.profile.IOrganization[]|null);
                }

                /** Represents an OrganizationResponse. */
                class OrganizationResponse implements IOrganizationResponse {

                    /**
                     * Constructs a new OrganizationResponse.
                     * @param [p] Properties to set
                     */
                    constructor(p?: jubian.golottery.model.profile.IOrganizationResponse);

                    /** OrganizationResponse groups. */
                    public groups: jubian.golottery.model.profile.IOrganization[];

                    /**
                     * Encodes the specified OrganizationResponse message. Does not implicitly {@link jubian.golottery.model.profile.OrganizationResponse.verify|verify} messages.
                     * @param m OrganizationResponse message or plain object to encode
                     * @param [w] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(m: jubian.golottery.model.profile.IOrganizationResponse, w?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrganizationResponse message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns OrganizationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): jubian.golottery.model.profile.OrganizationResponse;

                    /**
                     * Creates an OrganizationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param d Plain object
                     * @returns OrganizationResponse
                     */
                    public static fromObject(d: { [k: string]: any }): jubian.golottery.model.profile.OrganizationResponse;

                    /**
                     * Creates a plain object from an OrganizationResponse message. Also converts values to other types if specified.
                     * @param m OrganizationResponse
                     * @param [o] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(m: jubian.golottery.model.profile.OrganizationResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrganizationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

/** Namespace farm. */
export namespace farm {

    /** Properties of a ReqGameWords. */
    interface IReqGameWords {

        /** ReqGameWords user_id */
        user_id?: (string|null);

        /** ReqGameWords mode */
        mode?: (number|Long|null);

        /** ReqGameWords mode_param */
        mode_param?: (string|null);

        /** ReqGameWords game_type */
        game_type?: (number|Long|null);
    }

    /** Represents a ReqGameWords. */
    class ReqGameWords implements IReqGameWords {

        /**
         * Constructs a new ReqGameWords.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqGameWords);

        /** ReqGameWords user_id. */
        public user_id: string;

        /** ReqGameWords mode. */
        public mode: (number|Long);

        /** ReqGameWords mode_param. */
        public mode_param: string;

        /** ReqGameWords game_type. */
        public game_type: (number|Long);

        /**
         * Encodes the specified ReqGameWords message. Does not implicitly {@link farm.ReqGameWords.verify|verify} messages.
         * @param m ReqGameWords message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqGameWords, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqGameWords message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqGameWords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqGameWords;

        /**
         * Creates a ReqGameWords message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqGameWords
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqGameWords;

        /**
         * Creates a plain object from a ReqGameWords message. Also converts values to other types if specified.
         * @param m ReqGameWords
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqGameWords, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqGameWords to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespGameWords. */
    interface IRespGameWords {

        /** RespGameWords item_ids */
        item_ids?: ((number|Long)[]|null);

        /** RespGameWords must_learn */
        must_learn?: (number|Long|null);

        /** RespGameWords game_config */
        game_config?: (farm.IGameTypeConfig|null);
    }

    /** Represents a RespGameWords. */
    class RespGameWords implements IRespGameWords {

        /**
         * Constructs a new RespGameWords.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespGameWords);

        /** RespGameWords item_ids. */
        public item_ids: (number|Long)[];

        /** RespGameWords must_learn. */
        public must_learn: (number|Long);

        /** RespGameWords game_config. */
        public game_config?: (farm.IGameTypeConfig|null);

        /**
         * Encodes the specified RespGameWords message. Does not implicitly {@link farm.RespGameWords.verify|verify} messages.
         * @param m RespGameWords message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespGameWords, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespGameWords message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespGameWords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespGameWords;

        /**
         * Creates a RespGameWords message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespGameWords
         */
        public static fromObject(d: { [k: string]: any }): farm.RespGameWords;

        /**
         * Creates a plain object from a RespGameWords message. Also converts values to other types if specified.
         * @param m RespGameWords
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespGameWords, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespGameWords to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameTypeConfig. */
    interface IGameTypeConfig {

        /** GameTypeConfig game_duration */
        game_duration?: (number|Long|null);

        /** GameTypeConfig time_over */
        time_over?: (number|Long|null);

        /** GameTypeConfig stage_params */
        stage_params?: ((number|Long)[]|null);

        /** GameTypeConfig game_type */
        game_type?: (number|Long|null);

        /** GameTypeConfig time_over_or_wrong_deduction */
        time_over_or_wrong_deduction?: (number|null);

        /** GameTypeConfig unskillfull_deduction */
        unskillfull_deduction?: (number|null);

        /** GameTypeConfig star_evaluation */
        star_evaluation?: (number[]|null);
    }

    /** Represents a GameTypeConfig. */
    class GameTypeConfig implements IGameTypeConfig {

        /**
         * Constructs a new GameTypeConfig.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IGameTypeConfig);

        /** GameTypeConfig game_duration. */
        public game_duration: (number|Long);

        /** GameTypeConfig time_over. */
        public time_over: (number|Long);

        /** GameTypeConfig stage_params. */
        public stage_params: (number|Long)[];

        /** GameTypeConfig game_type. */
        public game_type: (number|Long);

        /** GameTypeConfig time_over_or_wrong_deduction. */
        public time_over_or_wrong_deduction: number;

        /** GameTypeConfig unskillfull_deduction. */
        public unskillfull_deduction: number;

        /** GameTypeConfig star_evaluation. */
        public star_evaluation: number[];

        /**
         * Encodes the specified GameTypeConfig message. Does not implicitly {@link farm.GameTypeConfig.verify|verify} messages.
         * @param m GameTypeConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IGameTypeConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameTypeConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameTypeConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.GameTypeConfig;

        /**
         * Creates a GameTypeConfig message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns GameTypeConfig
         */
        public static fromObject(d: { [k: string]: any }): farm.GameTypeConfig;

        /**
         * Creates a plain object from a GameTypeConfig message. Also converts values to other types if specified.
         * @param m GameTypeConfig
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.GameTypeConfig, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameTypeConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqUnitLearningProgress. */
    interface IReqUnitLearningProgress {

        /** ReqUnitLearningProgress user_id */
        user_id?: (string|null);

        /** ReqUnitLearningProgress mat_id */
        mat_id?: (number|Long|null);

        /** ReqUnitLearningProgress unit_id */
        unit_id?: (number|Long|null);
    }

    /** Represents a ReqUnitLearningProgress. */
    class ReqUnitLearningProgress implements IReqUnitLearningProgress {

        /**
         * Constructs a new ReqUnitLearningProgress.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqUnitLearningProgress);

        /** ReqUnitLearningProgress user_id. */
        public user_id: string;

        /** ReqUnitLearningProgress mat_id. */
        public mat_id: (number|Long);

        /** ReqUnitLearningProgress unit_id. */
        public unit_id: (number|Long);

        /**
         * Encodes the specified ReqUnitLearningProgress message. Does not implicitly {@link farm.ReqUnitLearningProgress.verify|verify} messages.
         * @param m ReqUnitLearningProgress message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqUnitLearningProgress, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqUnitLearningProgress message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqUnitLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqUnitLearningProgress;

        /**
         * Creates a ReqUnitLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqUnitLearningProgress
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqUnitLearningProgress;

        /**
         * Creates a plain object from a ReqUnitLearningProgress message. Also converts values to other types if specified.
         * @param m ReqUnitLearningProgress
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqUnitLearningProgress, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqUnitLearningProgress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespUnitLearningProgress. */
    interface IRespUnitLearningProgress {

        /** RespUnitLearningProgress mat_id */
        mat_id?: (number|Long|null);

        /** RespUnitLearningProgress games_progress */
        games_progress?: (farm.IGameTypeLearningProgressItem[]|null);
    }

    /** Represents a RespUnitLearningProgress. */
    class RespUnitLearningProgress implements IRespUnitLearningProgress {

        /**
         * Constructs a new RespUnitLearningProgress.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespUnitLearningProgress);

        /** RespUnitLearningProgress mat_id. */
        public mat_id: (number|Long);

        /** RespUnitLearningProgress games_progress. */
        public games_progress: farm.IGameTypeLearningProgressItem[];

        /**
         * Encodes the specified RespUnitLearningProgress message. Does not implicitly {@link farm.RespUnitLearningProgress.verify|verify} messages.
         * @param m RespUnitLearningProgress message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespUnitLearningProgress, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespUnitLearningProgress message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespUnitLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespUnitLearningProgress;

        /**
         * Creates a RespUnitLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespUnitLearningProgress
         */
        public static fromObject(d: { [k: string]: any }): farm.RespUnitLearningProgress;

        /**
         * Creates a plain object from a RespUnitLearningProgress message. Also converts values to other types if specified.
         * @param m RespUnitLearningProgress
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespUnitLearningProgress, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespUnitLearningProgress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameTypeLearningProgressItem. */
    interface IGameTypeLearningProgressItem {

        /** GameTypeLearningProgressItem game_type */
        game_type?: (number|Long|null);

        /** GameTypeLearningProgressItem star */
        star?: ((number|Long)[]|null);

        /** GameTypeLearningProgressItem history_max_score */
        history_max_score?: (string|null);

        /** GameTypeLearningProgressItem state */
        state?: (number|Long|null);
    }

    /** Represents a GameTypeLearningProgressItem. */
    class GameTypeLearningProgressItem implements IGameTypeLearningProgressItem {

        /**
         * Constructs a new GameTypeLearningProgressItem.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IGameTypeLearningProgressItem);

        /** GameTypeLearningProgressItem game_type. */
        public game_type: (number|Long);

        /** GameTypeLearningProgressItem star. */
        public star: (number|Long)[];

        /** GameTypeLearningProgressItem history_max_score. */
        public history_max_score: string;

        /** GameTypeLearningProgressItem state. */
        public state: (number|Long);

        /**
         * Encodes the specified GameTypeLearningProgressItem message. Does not implicitly {@link farm.GameTypeLearningProgressItem.verify|verify} messages.
         * @param m GameTypeLearningProgressItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IGameTypeLearningProgressItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameTypeLearningProgressItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameTypeLearningProgressItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.GameTypeLearningProgressItem;

        /**
         * Creates a GameTypeLearningProgressItem message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns GameTypeLearningProgressItem
         */
        public static fromObject(d: { [k: string]: any }): farm.GameTypeLearningProgressItem;

        /**
         * Creates a plain object from a GameTypeLearningProgressItem message. Also converts values to other types if specified.
         * @param m GameTypeLearningProgressItem
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.GameTypeLearningProgressItem, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameTypeLearningProgressItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqMatLearningProgress. */
    interface IReqMatLearningProgress {

        /** ReqMatLearningProgress user_id */
        user_id?: (string|null);

        /** ReqMatLearningProgress mat_id */
        mat_id?: (number|Long|null);
    }

    /** Represents a ReqMatLearningProgress. */
    class ReqMatLearningProgress implements IReqMatLearningProgress {

        /**
         * Constructs a new ReqMatLearningProgress.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqMatLearningProgress);

        /** ReqMatLearningProgress user_id. */
        public user_id: string;

        /** ReqMatLearningProgress mat_id. */
        public mat_id: (number|Long);

        /**
         * Encodes the specified ReqMatLearningProgress message. Does not implicitly {@link farm.ReqMatLearningProgress.verify|verify} messages.
         * @param m ReqMatLearningProgress message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqMatLearningProgress, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqMatLearningProgress message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqMatLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqMatLearningProgress;

        /**
         * Creates a ReqMatLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqMatLearningProgress
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqMatLearningProgress;

        /**
         * Creates a plain object from a ReqMatLearningProgress message. Also converts values to other types if specified.
         * @param m ReqMatLearningProgress
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqMatLearningProgress, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqMatLearningProgress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespMatLearningProgress. */
    interface IRespMatLearningProgress {

        /** RespMatLearningProgress mat_id */
        mat_id?: (number|Long|null);

        /** RespMatLearningProgress mat_star */
        mat_star?: ((number|Long)[]|null);

        /** RespMatLearningProgress grades_star */
        grades_star?: (string|null);

        /** RespMatLearningProgress units_star */
        units_star?: (string|null);
    }

    /** Represents a RespMatLearningProgress. */
    class RespMatLearningProgress implements IRespMatLearningProgress {

        /**
         * Constructs a new RespMatLearningProgress.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespMatLearningProgress);

        /** RespMatLearningProgress mat_id. */
        public mat_id: (number|Long);

        /** RespMatLearningProgress mat_star. */
        public mat_star: (number|Long)[];

        /** RespMatLearningProgress grades_star. */
        public grades_star: string;

        /** RespMatLearningProgress units_star. */
        public units_star: string;

        /**
         * Encodes the specified RespMatLearningProgress message. Does not implicitly {@link farm.RespMatLearningProgress.verify|verify} messages.
         * @param m RespMatLearningProgress message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespMatLearningProgress, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespMatLearningProgress message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespMatLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespMatLearningProgress;

        /**
         * Creates a RespMatLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespMatLearningProgress
         */
        public static fromObject(d: { [k: string]: any }): farm.RespMatLearningProgress;

        /**
         * Creates a plain object from a RespMatLearningProgress message. Also converts values to other types if specified.
         * @param m RespMatLearningProgress
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespMatLearningProgress, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespMatLearningProgress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqStudyUpload. */
    interface IReqStudyUpload {

        /** ReqStudyUpload user_id */
        user_id?: (string|null);

        /** ReqStudyUpload is_skip */
        is_skip?: (number|Long|null);

        /** ReqStudyUpload study_result */
        study_result?: (farm.IStudyResult[]|null);
    }

    /** Represents a ReqStudyUpload. */
    class ReqStudyUpload implements IReqStudyUpload {

        /**
         * Constructs a new ReqStudyUpload.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqStudyUpload);

        /** ReqStudyUpload user_id. */
        public user_id: string;

        /** ReqStudyUpload is_skip. */
        public is_skip: (number|Long);

        /** ReqStudyUpload study_result. */
        public study_result: farm.IStudyResult[];

        /**
         * Encodes the specified ReqStudyUpload message. Does not implicitly {@link farm.ReqStudyUpload.verify|verify} messages.
         * @param m ReqStudyUpload message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqStudyUpload, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqStudyUpload message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqStudyUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqStudyUpload;

        /**
         * Creates a ReqStudyUpload message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqStudyUpload
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqStudyUpload;

        /**
         * Creates a plain object from a ReqStudyUpload message. Also converts values to other types if specified.
         * @param m ReqStudyUpload
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqStudyUpload, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqStudyUpload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespStudyUpload. */
    interface IRespStudyUpload {

        /** RespStudyUpload res_list */
        res_list?: (farm.IRes[]|null);
    }

    /** Represents a RespStudyUpload. */
    class RespStudyUpload implements IRespStudyUpload {

        /**
         * Constructs a new RespStudyUpload.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespStudyUpload);

        /** RespStudyUpload res_list. */
        public res_list: farm.IRes[];

        /**
         * Encodes the specified RespStudyUpload message. Does not implicitly {@link farm.RespStudyUpload.verify|verify} messages.
         * @param m RespStudyUpload message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespStudyUpload, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespStudyUpload message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespStudyUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespStudyUpload;

        /**
         * Creates a RespStudyUpload message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespStudyUpload
         */
        public static fromObject(d: { [k: string]: any }): farm.RespStudyUpload;

        /**
         * Creates a plain object from a RespStudyUpload message. Also converts values to other types if specified.
         * @param m RespStudyUpload
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespStudyUpload, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespStudyUpload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StudyResult. */
    interface IStudyResult {

        /** StudyResult item_id */
        item_id?: (number|Long|null);

        /** StudyResult result */
        result?: (number|Long|null);

        /** StudyResult res_type */
        res_type?: (number|Long|null);

        /** StudyResult res_num */
        res_num?: (number|Long|null);
    }

    /** Represents a StudyResult. */
    class StudyResult implements IStudyResult {

        /**
         * Constructs a new StudyResult.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IStudyResult);

        /** StudyResult item_id. */
        public item_id: (number|Long);

        /** StudyResult result. */
        public result: (number|Long);

        /** StudyResult res_type. */
        public res_type: (number|Long);

        /** StudyResult res_num. */
        public res_num: (number|Long);

        /**
         * Encodes the specified StudyResult message. Does not implicitly {@link farm.StudyResult.verify|verify} messages.
         * @param m StudyResult message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IStudyResult, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StudyResult message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns StudyResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.StudyResult;

        /**
         * Creates a StudyResult message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns StudyResult
         */
        public static fromObject(d: { [k: string]: any }): farm.StudyResult;

        /**
         * Creates a plain object from a StudyResult message. Also converts values to other types if specified.
         * @param m StudyResult
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.StudyResult, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StudyResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Res. */
    interface IRes {

        /** Res res_type */
        res_type?: (number|Long|null);

        /** Res res_num */
        res_num?: (number|Long|null);
    }

    /** Represents a Res. */
    class Res implements IRes {

        /**
         * Constructs a new Res.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRes);

        /** Res res_type. */
        public res_type: (number|Long);

        /** Res res_num. */
        public res_num: (number|Long);

        /**
         * Encodes the specified Res message. Does not implicitly {@link farm.Res.verify|verify} messages.
         * @param m Res message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRes, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Res message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.Res;

        /**
         * Creates a Res message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Res
         */
        public static fromObject(d: { [k: string]: any }): farm.Res;

        /**
         * Creates a plain object from a Res message. Also converts values to other types if specified.
         * @param m Res
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.Res, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Res to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqGameUpload. */
    interface IReqGameUpload {

        /** ReqGameUpload user_id */
        user_id?: (string|null);

        /** ReqGameUpload start_time */
        start_time?: (number|Long|null);

        /** ReqGameUpload end_time */
        end_time?: (number|Long|null);

        /** ReqGameUpload game_result */
        game_result?: (farm.IGameResult[]|null);

        /** ReqGameUpload mode */
        mode?: (number|null);

        /** ReqGameUpload mode_param */
        mode_param?: (string|null);

        /** ReqGameUpload game_type */
        game_type?: (number|null);
    }

    /** Represents a ReqGameUpload. */
    class ReqGameUpload implements IReqGameUpload {

        /**
         * Constructs a new ReqGameUpload.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqGameUpload);

        /** ReqGameUpload user_id. */
        public user_id: string;

        /** ReqGameUpload start_time. */
        public start_time: (number|Long);

        /** ReqGameUpload end_time. */
        public end_time: (number|Long);

        /** ReqGameUpload game_result. */
        public game_result: farm.IGameResult[];

        /** ReqGameUpload mode. */
        public mode: number;

        /** ReqGameUpload mode_param. */
        public mode_param: string;

        /** ReqGameUpload game_type. */
        public game_type: number;

        /**
         * Encodes the specified ReqGameUpload message. Does not implicitly {@link farm.ReqGameUpload.verify|verify} messages.
         * @param m ReqGameUpload message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqGameUpload, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqGameUpload message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqGameUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqGameUpload;

        /**
         * Creates a ReqGameUpload message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqGameUpload
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqGameUpload;

        /**
         * Creates a plain object from a ReqGameUpload message. Also converts values to other types if specified.
         * @param m ReqGameUpload
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqGameUpload, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqGameUpload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespGameUpload. */
    interface IRespGameUpload {

        /** RespGameUpload res_list */
        res_list?: (farm.IRes[]|null);

        /** RespGameUpload game_record */
        game_record?: (farm.IGameRecord|null);

        /** RespGameUpload mode */
        mode?: (number|null);

        /** RespGameUpload mode_result */
        mode_result?: (farm.IModeResult|null);

        /** RespGameUpload tkfight_message */
        tkfight_message?: (string[]|null);

        /** RespGameUpload tast_completed */
        tast_completed?: ((number|Long)[]|null);

        /** RespGameUpload play_num */
        play_num?: (number|Long|null);
    }

    /** Represents a RespGameUpload. */
    class RespGameUpload implements IRespGameUpload {

        /**
         * Constructs a new RespGameUpload.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespGameUpload);

        /** RespGameUpload res_list. */
        public res_list: farm.IRes[];

        /** RespGameUpload game_record. */
        public game_record?: (farm.IGameRecord|null);

        /** RespGameUpload mode. */
        public mode: number;

        /** RespGameUpload mode_result. */
        public mode_result?: (farm.IModeResult|null);

        /** RespGameUpload tkfight_message. */
        public tkfight_message: string[];

        /** RespGameUpload tast_completed. */
        public tast_completed: (number|Long)[];

        /** RespGameUpload play_num. */
        public play_num: (number|Long);

        /**
         * Encodes the specified RespGameUpload message. Does not implicitly {@link farm.RespGameUpload.verify|verify} messages.
         * @param m RespGameUpload message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespGameUpload, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespGameUpload message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespGameUpload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespGameUpload;

        /**
         * Creates a RespGameUpload message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespGameUpload
         */
        public static fromObject(d: { [k: string]: any }): farm.RespGameUpload;

        /**
         * Creates a plain object from a RespGameUpload message. Also converts values to other types if specified.
         * @param m RespGameUpload
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespGameUpload, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespGameUpload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameResult. */
    interface IGameResult {

        /** GameResult item_id */
        item_id?: (number|Long|null);

        /** GameResult result */
        result?: (number|Long|null);

        /** GameResult res_type */
        res_type?: (number|Long|null);

        /** GameResult res_num */
        res_num?: (number|Long|null);

        /** GameResult catch_num */
        catch_num?: (number|Long|null);

        /** GameResult react_time */
        react_time?: (number|null);

        /** GameResult is_crit */
        is_crit?: (number|Long|null);
    }

    /** Represents a GameResult. */
    class GameResult implements IGameResult {

        /**
         * Constructs a new GameResult.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IGameResult);

        /** GameResult item_id. */
        public item_id: (number|Long);

        /** GameResult result. */
        public result: (number|Long);

        /** GameResult res_type. */
        public res_type: (number|Long);

        /** GameResult res_num. */
        public res_num: (number|Long);

        /** GameResult catch_num. */
        public catch_num: (number|Long);

        /** GameResult react_time. */
        public react_time: number;

        /** GameResult is_crit. */
        public is_crit: (number|Long);

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link farm.GameResult.verify|verify} messages.
         * @param m GameResult message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IGameResult, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.GameResult;

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns GameResult
         */
        public static fromObject(d: { [k: string]: any }): farm.GameResult;

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @param m GameResult
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.GameResult, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameRecord. */
    interface IGameRecord {

        /** GameRecord score */
        score?: (number|null);

        /** GameRecord wrong_words */
        wrong_words?: ((number|Long)[]|null);

        /** GameRecord unskillful_words */
        unskillful_words?: ((number|Long)[]|null);

        /** GameRecord skillful_words */
        skillful_words?: ((number|Long)[]|null);

        /** GameRecord superskillful_words */
        superskillful_words?: ((number|Long)[]|null);
    }

    /** Represents a GameRecord. */
    class GameRecord implements IGameRecord {

        /**
         * Constructs a new GameRecord.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IGameRecord);

        /** GameRecord score. */
        public score: number;

        /** GameRecord wrong_words. */
        public wrong_words: (number|Long)[];

        /** GameRecord unskillful_words. */
        public unskillful_words: (number|Long)[];

        /** GameRecord skillful_words. */
        public skillful_words: (number|Long)[];

        /** GameRecord superskillful_words. */
        public superskillful_words: (number|Long)[];

        /**
         * Encodes the specified GameRecord message. Does not implicitly {@link farm.GameRecord.verify|verify} messages.
         * @param m GameRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IGameRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.GameRecord;

        /**
         * Creates a GameRecord message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns GameRecord
         */
        public static fromObject(d: { [k: string]: any }): farm.GameRecord;

        /**
         * Creates a plain object from a GameRecord message. Also converts values to other types if specified.
         * @param m GameRecord
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.GameRecord, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ModeResult. */
    interface IModeResult {

        /** ModeResult checkin_id */
        checkin_id?: (number|Long|null);

        /** ModeResult checkin_state */
        checkin_state?: (number|null);

        /** ModeResult lesson_state */
        lesson_state?: (number|null);

        /** ModeResult nickName */
        nickName?: (string|null);

        /** ModeResult lessonName */
        lessonName?: (string|null);

        /** ModeResult zeroLeftTime */
        zeroLeftTime?: (number|null);

        /** ModeResult checkinPushRemark */
        checkinPushRemark?: (string|null);

        /** ModeResult star_progress */
        star_progress?: ((number|Long)[]|null);
    }

    /** Represents a ModeResult. */
    class ModeResult implements IModeResult {

        /**
         * Constructs a new ModeResult.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IModeResult);

        /** ModeResult checkin_id. */
        public checkin_id: (number|Long);

        /** ModeResult checkin_state. */
        public checkin_state: number;

        /** ModeResult lesson_state. */
        public lesson_state: number;

        /** ModeResult nickName. */
        public nickName: string;

        /** ModeResult lessonName. */
        public lessonName: string;

        /** ModeResult zeroLeftTime. */
        public zeroLeftTime: number;

        /** ModeResult checkinPushRemark. */
        public checkinPushRemark: string;

        /** ModeResult star_progress. */
        public star_progress: (number|Long)[];

        /**
         * Encodes the specified ModeResult message. Does not implicitly {@link farm.ModeResult.verify|verify} messages.
         * @param m ModeResult message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IModeResult, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModeResult message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ModeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ModeResult;

        /**
         * Creates a ModeResult message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ModeResult
         */
        public static fromObject(d: { [k: string]: any }): farm.ModeResult;

        /**
         * Creates a plain object from a ModeResult message. Also converts values to other types if specified.
         * @param m ModeResult
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ModeResult, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModeResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExpiredUserLimitConfig. */
    interface IExpiredUserLimitConfig {

        /** ExpiredUserLimitConfig can_play_unit_ids */
        can_play_unit_ids?: ((number|Long)[]|null);

        /** ExpiredUserLimitConfig limit_res_count */
        limit_res_count?: (number|Long|null);

        /** ExpiredUserLimitConfig can_use_checkin */
        can_use_checkin?: (number|Long|null);

        /** ExpiredUserLimitConfig can_use_spec */
        can_use_spec?: (number|Long|null);
    }

    /** Represents an ExpiredUserLimitConfig. */
    class ExpiredUserLimitConfig implements IExpiredUserLimitConfig {

        /**
         * Constructs a new ExpiredUserLimitConfig.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IExpiredUserLimitConfig);

        /** ExpiredUserLimitConfig can_play_unit_ids. */
        public can_play_unit_ids: (number|Long)[];

        /** ExpiredUserLimitConfig limit_res_count. */
        public limit_res_count: (number|Long);

        /** ExpiredUserLimitConfig can_use_checkin. */
        public can_use_checkin: (number|Long);

        /** ExpiredUserLimitConfig can_use_spec. */
        public can_use_spec: (number|Long);

        /**
         * Encodes the specified ExpiredUserLimitConfig message. Does not implicitly {@link farm.ExpiredUserLimitConfig.verify|verify} messages.
         * @param m ExpiredUserLimitConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IExpiredUserLimitConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExpiredUserLimitConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ExpiredUserLimitConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ExpiredUserLimitConfig;

        /**
         * Creates an ExpiredUserLimitConfig message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ExpiredUserLimitConfig
         */
        public static fromObject(d: { [k: string]: any }): farm.ExpiredUserLimitConfig;

        /**
         * Creates a plain object from an ExpiredUserLimitConfig message. Also converts values to other types if specified.
         * @param m ExpiredUserLimitConfig
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ExpiredUserLimitConfig, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExpiredUserLimitConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** GameType enum. */
    enum GameType {
        GameTypeNormal = 0,
        GameType1 = 1,
        GameType2 = 2,
        GameType3 = 3,
        GameType4 = 4
    }

    /** Properties of a WordItemInfo. */
    interface IWordItemInfo {

        /** WordItemInfo id */
        id?: (number|Long|null);

        /** WordItemInfo grade_id */
        grade_id?: (number|Long|null);

        /** WordItemInfo unit_id */
        unit_id?: (number|Long|null);

        /** WordItemInfo type */
        type?: (number|Long|null);

        /** WordItemInfo unit_index */
        unit_index?: (number|Long|null);

        /** WordItemInfo cn */
        cn?: (string|null);

        /** WordItemInfo en */
        en?: (string|null);
    }

    /** Represents a WordItemInfo. */
    class WordItemInfo implements IWordItemInfo {

        /**
         * Constructs a new WordItemInfo.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IWordItemInfo);

        /** WordItemInfo id. */
        public id: (number|Long);

        /** WordItemInfo grade_id. */
        public grade_id: (number|Long);

        /** WordItemInfo unit_id. */
        public unit_id: (number|Long);

        /** WordItemInfo type. */
        public type: (number|Long);

        /** WordItemInfo unit_index. */
        public unit_index: (number|Long);

        /** WordItemInfo cn. */
        public cn: string;

        /** WordItemInfo en. */
        public en: string;

        /**
         * Encodes the specified WordItemInfo message. Does not implicitly {@link farm.WordItemInfo.verify|verify} messages.
         * @param m WordItemInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IWordItemInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WordItemInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WordItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.WordItemInfo;

        /**
         * Creates a WordItemInfo message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns WordItemInfo
         */
        public static fromObject(d: { [k: string]: any }): farm.WordItemInfo;

        /**
         * Creates a plain object from a WordItemInfo message. Also converts values to other types if specified.
         * @param m WordItemInfo
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.WordItemInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WordItemInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GradeLearningProgress. */
    interface IGradeLearningProgress {

        /** GradeLearningProgress GradeID */
        GradeID?: (number|Long|null);

        /** GradeLearningProgress Star */
        Star?: (number|Long|null);
    }

    /** Represents a GradeLearningProgress. */
    class GradeLearningProgress implements IGradeLearningProgress {

        /**
         * Constructs a new GradeLearningProgress.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IGradeLearningProgress);

        /** GradeLearningProgress GradeID. */
        public GradeID: (number|Long);

        /** GradeLearningProgress Star. */
        public Star: (number|Long);

        /**
         * Encodes the specified GradeLearningProgress message. Does not implicitly {@link farm.GradeLearningProgress.verify|verify} messages.
         * @param m GradeLearningProgress message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IGradeLearningProgress, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GradeLearningProgress message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GradeLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.GradeLearningProgress;

        /**
         * Creates a GradeLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns GradeLearningProgress
         */
        public static fromObject(d: { [k: string]: any }): farm.GradeLearningProgress;

        /**
         * Creates a plain object from a GradeLearningProgress message. Also converts values to other types if specified.
         * @param m GradeLearningProgress
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.GradeLearningProgress, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GradeLearningProgress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnitLearningProgress. */
    interface IUnitLearningProgress {

        /** UnitLearningProgress UnitID */
        UnitID?: (number|Long|null);

        /** UnitLearningProgress GamesLearningProgress */
        GamesLearningProgress?: ({ [k: string]: farm.IGameTypeLearningProgress }|null);
    }

    /** Represents an UnitLearningProgress. */
    class UnitLearningProgress implements IUnitLearningProgress {

        /**
         * Constructs a new UnitLearningProgress.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IUnitLearningProgress);

        /** UnitLearningProgress UnitID. */
        public UnitID: (number|Long);

        /** UnitLearningProgress GamesLearningProgress. */
        public GamesLearningProgress: { [k: string]: farm.IGameTypeLearningProgress };

        /**
         * Encodes the specified UnitLearningProgress message. Does not implicitly {@link farm.UnitLearningProgress.verify|verify} messages.
         * @param m UnitLearningProgress message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IUnitLearningProgress, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnitLearningProgress message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UnitLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.UnitLearningProgress;

        /**
         * Creates an UnitLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns UnitLearningProgress
         */
        public static fromObject(d: { [k: string]: any }): farm.UnitLearningProgress;

        /**
         * Creates a plain object from an UnitLearningProgress message. Also converts values to other types if specified.
         * @param m UnitLearningProgress
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.UnitLearningProgress, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnitLearningProgress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameTypeLearningProgress. */
    interface IGameTypeLearningProgress {

        /** GameTypeLearningProgress GameType */
        GameType?: (farm.GameType|null);

        /** GameTypeLearningProgress star */
        star?: (number|Long|null);

        /** GameTypeLearningProgress HistoryMaxScore */
        HistoryMaxScore?: (number|null);
    }

    /** Represents a GameTypeLearningProgress. */
    class GameTypeLearningProgress implements IGameTypeLearningProgress {

        /**
         * Constructs a new GameTypeLearningProgress.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IGameTypeLearningProgress);

        /** GameTypeLearningProgress GameType. */
        public GameType: farm.GameType;

        /** GameTypeLearningProgress star. */
        public star: (number|Long);

        /** GameTypeLearningProgress HistoryMaxScore. */
        public HistoryMaxScore: number;

        /**
         * Encodes the specified GameTypeLearningProgress message. Does not implicitly {@link farm.GameTypeLearningProgress.verify|verify} messages.
         * @param m GameTypeLearningProgress message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IGameTypeLearningProgress, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameTypeLearningProgress message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameTypeLearningProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.GameTypeLearningProgress;

        /**
         * Creates a GameTypeLearningProgress message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns GameTypeLearningProgress
         */
        public static fromObject(d: { [k: string]: any }): farm.GameTypeLearningProgress;

        /**
         * Creates a plain object from a GameTypeLearningProgress message. Also converts values to other types if specified.
         * @param m GameTypeLearningProgress
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.GameTypeLearningProgress, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameTypeLearningProgress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqMaterials. */
    interface IReqMaterials {

        /** ReqMaterials user_id */
        user_id?: (number|Long|null);
    }

    /** Represents a ReqMaterials. */
    class ReqMaterials implements IReqMaterials {

        /**
         * Constructs a new ReqMaterials.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqMaterials);

        /** ReqMaterials user_id. */
        public user_id: (number|Long);

        /**
         * Encodes the specified ReqMaterials message. Does not implicitly {@link farm.ReqMaterials.verify|verify} messages.
         * @param m ReqMaterials message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqMaterials, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqMaterials message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqMaterials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqMaterials;

        /**
         * Creates a ReqMaterials message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqMaterials
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqMaterials;

        /**
         * Creates a plain object from a ReqMaterials message. Also converts values to other types if specified.
         * @param m ReqMaterials
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqMaterials, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqMaterials to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespMaterials. */
    interface IRespMaterials {

        /** RespMaterials Mats */
        Mats?: (farm.IMaterialItem[]|null);
    }

    /** Represents a RespMaterials. */
    class RespMaterials implements IRespMaterials {

        /**
         * Constructs a new RespMaterials.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespMaterials);

        /** RespMaterials Mats. */
        public Mats: farm.IMaterialItem[];

        /**
         * Encodes the specified RespMaterials message. Does not implicitly {@link farm.RespMaterials.verify|verify} messages.
         * @param m RespMaterials message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespMaterials, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespMaterials message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespMaterials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespMaterials;

        /**
         * Creates a RespMaterials message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespMaterials
         */
        public static fromObject(d: { [k: string]: any }): farm.RespMaterials;

        /**
         * Creates a plain object from a RespMaterials message. Also converts values to other types if specified.
         * @param m RespMaterials
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespMaterials, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespMaterials to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialItem. */
    interface IMaterialItem {

        /** MaterialItem mat_id */
        mat_id?: (number|Long|null);

        /** MaterialItem mat_name */
        mat_name?: (string|null);
    }

    /** Represents a MaterialItem. */
    class MaterialItem implements IMaterialItem {

        /**
         * Constructs a new MaterialItem.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IMaterialItem);

        /** MaterialItem mat_id. */
        public mat_id: (number|Long);

        /** MaterialItem mat_name. */
        public mat_name: string;

        /**
         * Encodes the specified MaterialItem message. Does not implicitly {@link farm.MaterialItem.verify|verify} messages.
         * @param m MaterialItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IMaterialItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MaterialItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MaterialItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.MaterialItem;

        /**
         * Creates a MaterialItem message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MaterialItem
         */
        public static fromObject(d: { [k: string]: any }): farm.MaterialItem;

        /**
         * Creates a plain object from a MaterialItem message. Also converts values to other types if specified.
         * @param m MaterialItem
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.MaterialItem, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqUpdateMat. */
    interface IReqUpdateMat {

        /** ReqUpdateMat uid_id */
        uid_id?: (number|Long|null);

        /** ReqUpdateMat mat_id */
        mat_id?: (number|Long|null);
    }

    /** Represents a ReqUpdateMat. */
    class ReqUpdateMat implements IReqUpdateMat {

        /**
         * Constructs a new ReqUpdateMat.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqUpdateMat);

        /** ReqUpdateMat uid_id. */
        public uid_id: (number|Long);

        /** ReqUpdateMat mat_id. */
        public mat_id: (number|Long);

        /**
         * Encodes the specified ReqUpdateMat message. Does not implicitly {@link farm.ReqUpdateMat.verify|verify} messages.
         * @param m ReqUpdateMat message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqUpdateMat, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqUpdateMat message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqUpdateMat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqUpdateMat;

        /**
         * Creates a ReqUpdateMat message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqUpdateMat
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqUpdateMat;

        /**
         * Creates a plain object from a ReqUpdateMat message. Also converts values to other types if specified.
         * @param m ReqUpdateMat
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqUpdateMat, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqUpdateMat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespUpdateMat. */
    interface IRespUpdateMat {

        /** RespUpdateMat mat_id */
        mat_id?: (number|Long|null);

        /** RespUpdateMat last_study */
        last_study?: ((number|Long)[]|null);
    }

    /** Represents a RespUpdateMat. */
    class RespUpdateMat implements IRespUpdateMat {

        /**
         * Constructs a new RespUpdateMat.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespUpdateMat);

        /** RespUpdateMat mat_id. */
        public mat_id: (number|Long);

        /** RespUpdateMat last_study. */
        public last_study: (number|Long)[];

        /**
         * Encodes the specified RespUpdateMat message. Does not implicitly {@link farm.RespUpdateMat.verify|verify} messages.
         * @param m RespUpdateMat message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespUpdateMat, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespUpdateMat message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespUpdateMat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespUpdateMat;

        /**
         * Creates a RespUpdateMat message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespUpdateMat
         */
        public static fromObject(d: { [k: string]: any }): farm.RespUpdateMat;

        /**
         * Creates a plain object from a RespUpdateMat message. Also converts values to other types if specified.
         * @param m RespUpdateMat
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespUpdateMat, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespUpdateMat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pos. */
    interface IPos {

        /** Pos x */
        x?: (number|null);

        /** Pos y */
        y?: (number|null);
    }

    /** Represents a Pos. */
    class Pos implements IPos {

        /**
         * Constructs a new Pos.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IPos);

        /** Pos x. */
        public x: number;

        /** Pos y. */
        public y: number;

        /**
         * Encodes the specified Pos message. Does not implicitly {@link farm.Pos.verify|verify} messages.
         * @param m Pos message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IPos, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pos message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Pos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.Pos;

        /**
         * Creates a Pos message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Pos
         */
        public static fromObject(d: { [k: string]: any }): farm.Pos;

        /**
         * Creates a plain object from a Pos message. Also converts values to other types if specified.
         * @param m Pos
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.Pos, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pos to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** BuildingStateType enum. */
    enum BuildingStateType {
        Invalid = 0,
        Building = 1,
        Upgrading = 2,
        PreComplete = 3,
        Normal = 4,
        Abandoned = 5,
        Lock = 6
    }

    /** CropStateType enum. */
    enum CropStateType {
        NotExist = 0,
        Seedling = 1,
        SmallLeaf = 2,
        LargeLeaf = 3,
        Mature = 4
    }

    /** ArableLandStateType enum. */
    enum ArableLandStateType {
        Space = 0,
        Using = 1
    }

    /** MailType enum. */
    enum MailType {
        SYS = 0,
        NPC = 1,
        Player = 2
    }

    /** MailState enum. */
    enum MailState {
        No_Read = 0,
        Read = 1
    }

    /** MailTapType enum. */
    enum MailTapType {
        Notification = 0,
        Annexes = 1
    }

    /** AnnexState enum. */
    enum AnnexState {
        No_Receive = 0,
        Received = 1
    }

    /** CurrencyType enum. */
    enum CurrencyType {
        CNothing = 0,
        CGold = 1,
        CCrystal = 2,
        CLove = 3
    }

    /** UnlockConditionType enum. */
    enum UnlockConditionType {
        Nothing = 0,
        Love = 1,
        Gold = 2,
        Task = 3,
        Prop = 4,
        ManorHeart = 5,
        Level = 6,
        Crystal = 7
    }

    /** Properties of a BuildingItem. */
    interface IBuildingItem {

        /** BuildingItem id */
        id?: (number|Long|null);

        /** BuildingItem configID */
        configID?: (number|null);

        /** BuildingItem level */
        level?: (number|null);

        /** BuildingItem rotated */
        rotated?: (boolean|null);

        /** BuildingItem pos */
        pos?: (farm.IPos|null);

        /** BuildingItem state */
        state?: (farm.BuildingStateType|null);

        /** BuildingItem leftDur */
        leftDur?: (number|null);
    }

    /** Represents a BuildingItem. */
    class BuildingItem implements IBuildingItem {

        /**
         * Constructs a new BuildingItem.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IBuildingItem);

        /** BuildingItem id. */
        public id: (number|Long);

        /** BuildingItem configID. */
        public configID: number;

        /** BuildingItem level. */
        public level: number;

        /** BuildingItem rotated. */
        public rotated: boolean;

        /** BuildingItem pos. */
        public pos?: (farm.IPos|null);

        /** BuildingItem state. */
        public state: farm.BuildingStateType;

        /** BuildingItem leftDur. */
        public leftDur: number;

        /**
         * Encodes the specified BuildingItem message. Does not implicitly {@link farm.BuildingItem.verify|verify} messages.
         * @param m BuildingItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IBuildingItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuildingItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BuildingItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.BuildingItem;

        /**
         * Creates a BuildingItem message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns BuildingItem
         */
        public static fromObject(d: { [k: string]: any }): farm.BuildingItem;

        /**
         * Creates a plain object from a BuildingItem message. Also converts values to other types if specified.
         * @param m BuildingItem
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.BuildingItem, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildingItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqBuildingList. */
    interface IReqBuildingList {
    }

    /** Represents a ReqBuildingList. */
    class ReqBuildingList implements IReqBuildingList {

        /**
         * Constructs a new ReqBuildingList.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqBuildingList);

        /**
         * Encodes the specified ReqBuildingList message. Does not implicitly {@link farm.ReqBuildingList.verify|verify} messages.
         * @param m ReqBuildingList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqBuildingList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqBuildingList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqBuildingList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqBuildingList;

        /**
         * Creates a ReqBuildingList message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqBuildingList
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqBuildingList;

        /**
         * Creates a plain object from a ReqBuildingList message. Also converts values to other types if specified.
         * @param m ReqBuildingList
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqBuildingList, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqBuildingList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespBuildingList. */
    interface IRespBuildingList {

        /** RespBuildingList buildings */
        buildings?: (farm.IBuildingItem[]|null);
    }

    /** Represents a RespBuildingList. */
    class RespBuildingList implements IRespBuildingList {

        /**
         * Constructs a new RespBuildingList.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespBuildingList);

        /** RespBuildingList buildings. */
        public buildings: farm.IBuildingItem[];

        /**
         * Encodes the specified RespBuildingList message. Does not implicitly {@link farm.RespBuildingList.verify|verify} messages.
         * @param m RespBuildingList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespBuildingList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespBuildingList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespBuildingList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespBuildingList;

        /**
         * Creates a RespBuildingList message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespBuildingList
         */
        public static fromObject(d: { [k: string]: any }): farm.RespBuildingList;

        /**
         * Creates a plain object from a RespBuildingList message. Also converts values to other types if specified.
         * @param m RespBuildingList
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespBuildingList, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespBuildingList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqCanBuildBuildingList. */
    interface IReqCanBuildBuildingList {
    }

    /** Represents a ReqCanBuildBuildingList. */
    class ReqCanBuildBuildingList implements IReqCanBuildBuildingList {

        /**
         * Constructs a new ReqCanBuildBuildingList.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqCanBuildBuildingList);

        /**
         * Encodes the specified ReqCanBuildBuildingList message. Does not implicitly {@link farm.ReqCanBuildBuildingList.verify|verify} messages.
         * @param m ReqCanBuildBuildingList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqCanBuildBuildingList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqCanBuildBuildingList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqCanBuildBuildingList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqCanBuildBuildingList;

        /**
         * Creates a ReqCanBuildBuildingList message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqCanBuildBuildingList
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqCanBuildBuildingList;

        /**
         * Creates a plain object from a ReqCanBuildBuildingList message. Also converts values to other types if specified.
         * @param m ReqCanBuildBuildingList
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqCanBuildBuildingList, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqCanBuildBuildingList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespCanBuildBuildingList. */
    interface IRespCanBuildBuildingList {

        /** RespCanBuildBuildingList buildingConfigIds */
        buildingConfigIds?: (number[]|null);
    }

    /** Represents a RespCanBuildBuildingList. */
    class RespCanBuildBuildingList implements IRespCanBuildBuildingList {

        /**
         * Constructs a new RespCanBuildBuildingList.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespCanBuildBuildingList);

        /** RespCanBuildBuildingList buildingConfigIds. */
        public buildingConfigIds: number[];

        /**
         * Encodes the specified RespCanBuildBuildingList message. Does not implicitly {@link farm.RespCanBuildBuildingList.verify|verify} messages.
         * @param m RespCanBuildBuildingList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespCanBuildBuildingList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespCanBuildBuildingList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespCanBuildBuildingList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespCanBuildBuildingList;

        /**
         * Creates a RespCanBuildBuildingList message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespCanBuildBuildingList
         */
        public static fromObject(d: { [k: string]: any }): farm.RespCanBuildBuildingList;

        /**
         * Creates a plain object from a RespCanBuildBuildingList message. Also converts values to other types if specified.
         * @param m RespCanBuildBuildingList
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespCanBuildBuildingList, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespCanBuildBuildingList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqBuild. */
    interface IReqBuild {

        /** ReqBuild configID */
        configID?: (number|null);

        /** ReqBuild rotated */
        rotated?: (boolean|null);

        /** ReqBuild pos */
        pos?: (farm.IPos|null);
    }

    /** Represents a ReqBuild. */
    class ReqBuild implements IReqBuild {

        /**
         * Constructs a new ReqBuild.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqBuild);

        /** ReqBuild configID. */
        public configID: number;

        /** ReqBuild rotated. */
        public rotated: boolean;

        /** ReqBuild pos. */
        public pos?: (farm.IPos|null);

        /**
         * Encodes the specified ReqBuild message. Does not implicitly {@link farm.ReqBuild.verify|verify} messages.
         * @param m ReqBuild message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqBuild, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqBuild message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqBuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqBuild;

        /**
         * Creates a ReqBuild message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqBuild
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqBuild;

        /**
         * Creates a plain object from a ReqBuild message. Also converts values to other types if specified.
         * @param m ReqBuild
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqBuild, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqBuild to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqById. */
    interface IReqById {

        /** ReqById id */
        id?: (number|Long|null);
    }

    /** Represents a ReqById. */
    class ReqById implements IReqById {

        /**
         * Constructs a new ReqById.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqById);

        /** ReqById id. */
        public id: (number|Long);

        /**
         * Encodes the specified ReqById message. Does not implicitly {@link farm.ReqById.verify|verify} messages.
         * @param m ReqById message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqById, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqById message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqById;

        /**
         * Creates a ReqById message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqById
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqById;

        /**
         * Creates a plain object from a ReqById message. Also converts values to other types if specified.
         * @param m ReqById
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqById, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MessageBuildingStateChanged. */
    interface IMessageBuildingStateChanged {

        /** MessageBuildingStateChanged id */
        id?: (number|Long|null);

        /** MessageBuildingStateChanged state */
        state?: (farm.BuildingStateType|null);
    }

    /** Represents a MessageBuildingStateChanged. */
    class MessageBuildingStateChanged implements IMessageBuildingStateChanged {

        /**
         * Constructs a new MessageBuildingStateChanged.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IMessageBuildingStateChanged);

        /** MessageBuildingStateChanged id. */
        public id: (number|Long);

        /** MessageBuildingStateChanged state. */
        public state: farm.BuildingStateType;

        /**
         * Encodes the specified MessageBuildingStateChanged message. Does not implicitly {@link farm.MessageBuildingStateChanged.verify|verify} messages.
         * @param m MessageBuildingStateChanged message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IMessageBuildingStateChanged, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageBuildingStateChanged message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MessageBuildingStateChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.MessageBuildingStateChanged;

        /**
         * Creates a MessageBuildingStateChanged message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MessageBuildingStateChanged
         */
        public static fromObject(d: { [k: string]: any }): farm.MessageBuildingStateChanged;

        /**
         * Creates a plain object from a MessageBuildingStateChanged message. Also converts values to other types if specified.
         * @param m MessageBuildingStateChanged
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.MessageBuildingStateChanged, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageBuildingStateChanged to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MessageCurrencyStateChanged. */
    interface IMessageCurrencyStateChanged {

        /** MessageCurrencyStateChanged coin */
        coin?: (number|null);

        /** MessageCurrencyStateChanged crystal */
        crystal?: (number|null);

        /** MessageCurrencyStateChanged heart */
        heart?: (number|null);
    }

    /** Represents a MessageCurrencyStateChanged. */
    class MessageCurrencyStateChanged implements IMessageCurrencyStateChanged {

        /**
         * Constructs a new MessageCurrencyStateChanged.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IMessageCurrencyStateChanged);

        /** MessageCurrencyStateChanged coin. */
        public coin: number;

        /** MessageCurrencyStateChanged crystal. */
        public crystal: number;

        /** MessageCurrencyStateChanged heart. */
        public heart: number;

        /**
         * Encodes the specified MessageCurrencyStateChanged message. Does not implicitly {@link farm.MessageCurrencyStateChanged.verify|verify} messages.
         * @param m MessageCurrencyStateChanged message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IMessageCurrencyStateChanged, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageCurrencyStateChanged message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MessageCurrencyStateChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.MessageCurrencyStateChanged;

        /**
         * Creates a MessageCurrencyStateChanged message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MessageCurrencyStateChanged
         */
        public static fromObject(d: { [k: string]: any }): farm.MessageCurrencyStateChanged;

        /**
         * Creates a plain object from a MessageCurrencyStateChanged message. Also converts values to other types if specified.
         * @param m MessageCurrencyStateChanged
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.MessageCurrencyStateChanged, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageCurrencyStateChanged to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqEditBuilding. */
    interface IReqEditBuilding {

        /** ReqEditBuilding id */
        id?: (number|Long|null);

        /** ReqEditBuilding rotated */
        rotated?: (boolean|null);

        /** ReqEditBuilding pos */
        pos?: (farm.IPos|null);
    }

    /** Represents a ReqEditBuilding. */
    class ReqEditBuilding implements IReqEditBuilding {

        /**
         * Constructs a new ReqEditBuilding.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqEditBuilding);

        /** ReqEditBuilding id. */
        public id: (number|Long);

        /** ReqEditBuilding rotated. */
        public rotated: boolean;

        /** ReqEditBuilding pos. */
        public pos?: (farm.IPos|null);

        /**
         * Encodes the specified ReqEditBuilding message. Does not implicitly {@link farm.ReqEditBuilding.verify|verify} messages.
         * @param m ReqEditBuilding message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqEditBuilding, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqEditBuilding message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqEditBuilding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqEditBuilding;

        /**
         * Creates a ReqEditBuilding message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqEditBuilding
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqEditBuilding;

        /**
         * Creates a plain object from a ReqEditBuilding message. Also converts values to other types if specified.
         * @param m ReqEditBuilding
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqEditBuilding, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqEditBuilding to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespRecovery. */
    interface IRespRecovery {

        /** RespRecovery id */
        id?: (number|Long|null);

        /** RespRecovery tkCrystalLeft */
        tkCrystalLeft?: (number|null);
    }

    /** Represents a RespRecovery. */
    class RespRecovery implements IRespRecovery {

        /**
         * Constructs a new RespRecovery.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespRecovery);

        /** RespRecovery id. */
        public id: (number|Long);

        /** RespRecovery tkCrystalLeft. */
        public tkCrystalLeft: number;

        /**
         * Encodes the specified RespRecovery message. Does not implicitly {@link farm.RespRecovery.verify|verify} messages.
         * @param m RespRecovery message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespRecovery, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespRecovery message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespRecovery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespRecovery;

        /**
         * Creates a RespRecovery message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespRecovery
         */
        public static fromObject(d: { [k: string]: any }): farm.RespRecovery;

        /**
         * Creates a plain object from a RespRecovery message. Also converts values to other types if specified.
         * @param m RespRecovery
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespRecovery, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespRecovery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespCompleteImm. */
    interface IRespCompleteImm {

        /** RespCompleteImm id */
        id?: (number|Long|null);

        /** RespCompleteImm tkCrystalLeft */
        tkCrystalLeft?: (number|null);
    }

    /** Represents a RespCompleteImm. */
    class RespCompleteImm implements IRespCompleteImm {

        /**
         * Constructs a new RespCompleteImm.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespCompleteImm);

        /** RespCompleteImm id. */
        public id: (number|Long);

        /** RespCompleteImm tkCrystalLeft. */
        public tkCrystalLeft: number;

        /**
         * Encodes the specified RespCompleteImm message. Does not implicitly {@link farm.RespCompleteImm.verify|verify} messages.
         * @param m RespCompleteImm message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespCompleteImm, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespCompleteImm message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespCompleteImm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespCompleteImm;

        /**
         * Creates a RespCompleteImm message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespCompleteImm
         */
        public static fromObject(d: { [k: string]: any }): farm.RespCompleteImm;

        /**
         * Creates a plain object from a RespCompleteImm message. Also converts values to other types if specified.
         * @param m RespCompleteImm
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespCompleteImm, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespCompleteImm to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqNoBodyParam. */
    interface IReqNoBodyParam {
    }

    /** Represents a ReqNoBodyParam. */
    class ReqNoBodyParam implements IReqNoBodyParam {

        /**
         * Constructs a new ReqNoBodyParam.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqNoBodyParam);

        /**
         * Encodes the specified ReqNoBodyParam message. Does not implicitly {@link farm.ReqNoBodyParam.verify|verify} messages.
         * @param m ReqNoBodyParam message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqNoBodyParam, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqNoBodyParam message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqNoBodyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqNoBodyParam;

        /**
         * Creates a ReqNoBodyParam message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqNoBodyParam
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqNoBodyParam;

        /**
         * Creates a plain object from a ReqNoBodyParam message. Also converts values to other types if specified.
         * @param m ReqNoBodyParam
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqNoBodyParam, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqNoBodyParam to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespNoBodyParam. */
    interface IRespNoBodyParam {
    }

    /** Represents a RespNoBodyParam. */
    class RespNoBodyParam implements IRespNoBodyParam {

        /**
         * Constructs a new RespNoBodyParam.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespNoBodyParam);

        /**
         * Encodes the specified RespNoBodyParam message. Does not implicitly {@link farm.RespNoBodyParam.verify|verify} messages.
         * @param m RespNoBodyParam message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespNoBodyParam, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespNoBodyParam message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespNoBodyParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespNoBodyParam;

        /**
         * Creates a RespNoBodyParam message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespNoBodyParam
         */
        public static fromObject(d: { [k: string]: any }): farm.RespNoBodyParam;

        /**
         * Creates a plain object from a RespNoBodyParam message. Also converts values to other types if specified.
         * @param m RespNoBodyParam
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespNoBodyParam, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespNoBodyParam to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespManorHeartInfo. */
    interface IRespManorHeartInfo {

        /** RespManorHeartInfo id */
        id?: (number|Long|null);

        /** RespManorHeartInfo nike_name */
        nike_name?: (string|null);

        /** RespManorHeartInfo user_code */
        user_code?: (string|null);

        /** RespManorHeartInfo tk_gold */
        tk_gold?: (number|Long|null);

        /** RespManorHeartInfo tk_love */
        tk_love?: (number|Long|null);

        /** RespManorHeartInfo tk_crystal */
        tk_crystal?: (number|Long|null);

        /** RespManorHeartInfo avatar_id */
        avatar_id?: (number|null);

        /** RespManorHeartInfo buildings */
        buildings?: (farm.IManorHeartBuildingListItem[]|null);
    }

    /** Represents a RespManorHeartInfo. */
    class RespManorHeartInfo implements IRespManorHeartInfo {

        /**
         * Constructs a new RespManorHeartInfo.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespManorHeartInfo);

        /** RespManorHeartInfo id. */
        public id: (number|Long);

        /** RespManorHeartInfo nike_name. */
        public nike_name: string;

        /** RespManorHeartInfo user_code. */
        public user_code: string;

        /** RespManorHeartInfo tk_gold. */
        public tk_gold: (number|Long);

        /** RespManorHeartInfo tk_love. */
        public tk_love: (number|Long);

        /** RespManorHeartInfo tk_crystal. */
        public tk_crystal: (number|Long);

        /** RespManorHeartInfo avatar_id. */
        public avatar_id: number;

        /** RespManorHeartInfo buildings. */
        public buildings: farm.IManorHeartBuildingListItem[];

        /**
         * Encodes the specified RespManorHeartInfo message. Does not implicitly {@link farm.RespManorHeartInfo.verify|verify} messages.
         * @param m RespManorHeartInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespManorHeartInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespManorHeartInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespManorHeartInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespManorHeartInfo;

        /**
         * Creates a RespManorHeartInfo message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespManorHeartInfo
         */
        public static fromObject(d: { [k: string]: any }): farm.RespManorHeartInfo;

        /**
         * Creates a plain object from a RespManorHeartInfo message. Also converts values to other types if specified.
         * @param m RespManorHeartInfo
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespManorHeartInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespManorHeartInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ManorHeartBuildingListItem. */
    interface IManorHeartBuildingListItem {

        /** ManorHeartBuildingListItem id */
        id?: (number|Long|null);

        /** ManorHeartBuildingListItem configID */
        configID?: (number|null);
    }

    /** Represents a ManorHeartBuildingListItem. */
    class ManorHeartBuildingListItem implements IManorHeartBuildingListItem {

        /**
         * Constructs a new ManorHeartBuildingListItem.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IManorHeartBuildingListItem);

        /** ManorHeartBuildingListItem id. */
        public id: (number|Long);

        /** ManorHeartBuildingListItem configID. */
        public configID: number;

        /**
         * Encodes the specified ManorHeartBuildingListItem message. Does not implicitly {@link farm.ManorHeartBuildingListItem.verify|verify} messages.
         * @param m ManorHeartBuildingListItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IManorHeartBuildingListItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ManorHeartBuildingListItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ManorHeartBuildingListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ManorHeartBuildingListItem;

        /**
         * Creates a ManorHeartBuildingListItem message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ManorHeartBuildingListItem
         */
        public static fromObject(d: { [k: string]: any }): farm.ManorHeartBuildingListItem;

        /**
         * Creates a plain object from a ManorHeartBuildingListItem message. Also converts values to other types if specified.
         * @param m ManorHeartBuildingListItem
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ManorHeartBuildingListItem, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ManorHeartBuildingListItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespUserAvatars. */
    interface IRespUserAvatars {

        /** RespUserAvatars avatarIds */
        avatarIds?: (number[]|null);
    }

    /** Represents a RespUserAvatars. */
    class RespUserAvatars implements IRespUserAvatars {

        /**
         * Constructs a new RespUserAvatars.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespUserAvatars);

        /** RespUserAvatars avatarIds. */
        public avatarIds: number[];

        /**
         * Encodes the specified RespUserAvatars message. Does not implicitly {@link farm.RespUserAvatars.verify|verify} messages.
         * @param m RespUserAvatars message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespUserAvatars, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespUserAvatars message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespUserAvatars
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespUserAvatars;

        /**
         * Creates a RespUserAvatars message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespUserAvatars
         */
        public static fromObject(d: { [k: string]: any }): farm.RespUserAvatars;

        /**
         * Creates a plain object from a RespUserAvatars message. Also converts values to other types if specified.
         * @param m RespUserAvatars
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespUserAvatars, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespUserAvatars to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqUpdateAvatar. */
    interface IReqUpdateAvatar {

        /** ReqUpdateAvatar id */
        id?: (number|null);
    }

    /** Represents a ReqUpdateAvatar. */
    class ReqUpdateAvatar implements IReqUpdateAvatar {

        /**
         * Constructs a new ReqUpdateAvatar.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqUpdateAvatar);

        /** ReqUpdateAvatar id. */
        public id: number;

        /**
         * Encodes the specified ReqUpdateAvatar message. Does not implicitly {@link farm.ReqUpdateAvatar.verify|verify} messages.
         * @param m ReqUpdateAvatar message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqUpdateAvatar, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqUpdateAvatar message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqUpdateAvatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqUpdateAvatar;

        /**
         * Creates a ReqUpdateAvatar message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqUpdateAvatar
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqUpdateAvatar;

        /**
         * Creates a plain object from a ReqUpdateAvatar message. Also converts values to other types if specified.
         * @param m ReqUpdateAvatar
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqUpdateAvatar, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqUpdateAvatar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespUpdateAvatar. */
    interface IRespUpdateAvatar {

        /** RespUpdateAvatar id */
        id?: (number|null);
    }

    /** Represents a RespUpdateAvatar. */
    class RespUpdateAvatar implements IRespUpdateAvatar {

        /**
         * Constructs a new RespUpdateAvatar.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespUpdateAvatar);

        /** RespUpdateAvatar id. */
        public id: number;

        /**
         * Encodes the specified RespUpdateAvatar message. Does not implicitly {@link farm.RespUpdateAvatar.verify|verify} messages.
         * @param m RespUpdateAvatar message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespUpdateAvatar, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespUpdateAvatar message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespUpdateAvatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespUpdateAvatar;

        /**
         * Creates a RespUpdateAvatar message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespUpdateAvatar
         */
        public static fromObject(d: { [k: string]: any }): farm.RespUpdateAvatar;

        /**
         * Creates a plain object from a RespUpdateAvatar message. Also converts values to other types if specified.
         * @param m RespUpdateAvatar
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespUpdateAvatar, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespUpdateAvatar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqUpdateNickName. */
    interface IReqUpdateNickName {

        /** ReqUpdateNickName nick_name */
        nick_name?: (string|null);
    }

    /** Represents a ReqUpdateNickName. */
    class ReqUpdateNickName implements IReqUpdateNickName {

        /**
         * Constructs a new ReqUpdateNickName.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqUpdateNickName);

        /** ReqUpdateNickName nick_name. */
        public nick_name: string;

        /**
         * Encodes the specified ReqUpdateNickName message. Does not implicitly {@link farm.ReqUpdateNickName.verify|verify} messages.
         * @param m ReqUpdateNickName message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqUpdateNickName, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqUpdateNickName message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqUpdateNickName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqUpdateNickName;

        /**
         * Creates a ReqUpdateNickName message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqUpdateNickName
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqUpdateNickName;

        /**
         * Creates a plain object from a ReqUpdateNickName message. Also converts values to other types if specified.
         * @param m ReqUpdateNickName
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqUpdateNickName, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqUpdateNickName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespUpdateNickName. */
    interface IRespUpdateNickName {

        /** RespUpdateNickName nick_name */
        nick_name?: (string|null);
    }

    /** Represents a RespUpdateNickName. */
    class RespUpdateNickName implements IRespUpdateNickName {

        /**
         * Constructs a new RespUpdateNickName.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespUpdateNickName);

        /** RespUpdateNickName nick_name. */
        public nick_name: string;

        /**
         * Encodes the specified RespUpdateNickName message. Does not implicitly {@link farm.RespUpdateNickName.verify|verify} messages.
         * @param m RespUpdateNickName message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespUpdateNickName, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespUpdateNickName message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespUpdateNickName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespUpdateNickName;

        /**
         * Creates a RespUpdateNickName message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespUpdateNickName
         */
        public static fromObject(d: { [k: string]: any }): farm.RespUpdateNickName;

        /**
         * Creates a plain object from a RespUpdateNickName message. Also converts values to other types if specified.
         * @param m RespUpdateNickName
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespUpdateNickName, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespUpdateNickName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespBarnInfo. */
    interface IRespBarnInfo {

        /** RespBarnInfo id */
        id?: (number|Long|null);

        /** RespBarnInfo total_capacity */
        total_capacity?: (number|null);

        /** RespBarnInfo crop_items */
        crop_items?: (farm.IBarnCropItem[]|null);
    }

    /** Represents a RespBarnInfo. */
    class RespBarnInfo implements IRespBarnInfo {

        /**
         * Constructs a new RespBarnInfo.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespBarnInfo);

        /** RespBarnInfo id. */
        public id: (number|Long);

        /** RespBarnInfo total_capacity. */
        public total_capacity: number;

        /** RespBarnInfo crop_items. */
        public crop_items: farm.IBarnCropItem[];

        /**
         * Encodes the specified RespBarnInfo message. Does not implicitly {@link farm.RespBarnInfo.verify|verify} messages.
         * @param m RespBarnInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespBarnInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespBarnInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespBarnInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespBarnInfo;

        /**
         * Creates a RespBarnInfo message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespBarnInfo
         */
        public static fromObject(d: { [k: string]: any }): farm.RespBarnInfo;

        /**
         * Creates a plain object from a RespBarnInfo message. Also converts values to other types if specified.
         * @param m RespBarnInfo
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespBarnInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespBarnInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BarnCropItem. */
    interface IBarnCropItem {

        /** BarnCropItem id */
        id?: (number|Long|null);

        /** BarnCropItem configID */
        configID?: (number|null);

        /** BarnCropItem total_num */
        total_num?: (number|null);
    }

    /** Represents a BarnCropItem. */
    class BarnCropItem implements IBarnCropItem {

        /**
         * Constructs a new BarnCropItem.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IBarnCropItem);

        /** BarnCropItem id. */
        public id: (number|Long);

        /** BarnCropItem configID. */
        public configID: number;

        /** BarnCropItem total_num. */
        public total_num: number;

        /**
         * Encodes the specified BarnCropItem message. Does not implicitly {@link farm.BarnCropItem.verify|verify} messages.
         * @param m BarnCropItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IBarnCropItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BarnCropItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BarnCropItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.BarnCropItem;

        /**
         * Creates a BarnCropItem message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns BarnCropItem
         */
        public static fromObject(d: { [k: string]: any }): farm.BarnCropItem;

        /**
         * Creates a plain object from a BarnCropItem message. Also converts values to other types if specified.
         * @param m BarnCropItem
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.BarnCropItem, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BarnCropItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqBarnSell. */
    interface IReqBarnSell {

        /** ReqBarnSell id */
        id?: (number|Long|null);

        /** ReqBarnSell num */
        num?: (number|null);
    }

    /** Represents a ReqBarnSell. */
    class ReqBarnSell implements IReqBarnSell {

        /**
         * Constructs a new ReqBarnSell.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqBarnSell);

        /** ReqBarnSell id. */
        public id: (number|Long);

        /** ReqBarnSell num. */
        public num: number;

        /**
         * Encodes the specified ReqBarnSell message. Does not implicitly {@link farm.ReqBarnSell.verify|verify} messages.
         * @param m ReqBarnSell message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqBarnSell, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqBarnSell message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqBarnSell
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqBarnSell;

        /**
         * Creates a ReqBarnSell message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqBarnSell
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqBarnSell;

        /**
         * Creates a plain object from a ReqBarnSell message. Also converts values to other types if specified.
         * @param m ReqBarnSell
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqBarnSell, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqBarnSell to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespBarnSell. */
    interface IRespBarnSell {

        /** RespBarnSell id */
        id?: (number|Long|null);

        /** RespBarnSell num */
        num?: (number|null);

        /** RespBarnSell tk_gold */
        tk_gold?: (number|Long|null);
    }

    /** Represents a RespBarnSell. */
    class RespBarnSell implements IRespBarnSell {

        /**
         * Constructs a new RespBarnSell.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespBarnSell);

        /** RespBarnSell id. */
        public id: (number|Long);

        /** RespBarnSell num. */
        public num: number;

        /** RespBarnSell tk_gold. */
        public tk_gold: (number|Long);

        /**
         * Encodes the specified RespBarnSell message. Does not implicitly {@link farm.RespBarnSell.verify|verify} messages.
         * @param m RespBarnSell message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespBarnSell, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespBarnSell message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespBarnSell
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespBarnSell;

        /**
         * Creates a RespBarnSell message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespBarnSell
         */
        public static fromObject(d: { [k: string]: any }): farm.RespBarnSell;

        /**
         * Creates a plain object from a RespBarnSell message. Also converts values to other types if specified.
         * @param m RespBarnSell
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespBarnSell, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespBarnSell to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PropCfgItem. */
    interface IPropCfgItem {

        /** PropCfgItem id */
        id?: (number|null);

        /** PropCfgItem name */
        name?: (string|null);

        /** PropCfgItem display */
        display?: (number|null);

        /** PropCfgItem type */
        type?: (number|null);

        /** PropCfgItem desc */
        desc?: (string|null);

        /** PropCfgItem world */
        world?: (number|null);

        /** PropCfgItem icon_path */
        icon_path?: (string|null);

        /** PropCfgItem sale_price */
        sale_price?: (number|null);
    }

    /** Represents a PropCfgItem. */
    class PropCfgItem implements IPropCfgItem {

        /**
         * Constructs a new PropCfgItem.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IPropCfgItem);

        /** PropCfgItem id. */
        public id: number;

        /** PropCfgItem name. */
        public name: string;

        /** PropCfgItem display. */
        public display: number;

        /** PropCfgItem type. */
        public type: number;

        /** PropCfgItem desc. */
        public desc: string;

        /** PropCfgItem world. */
        public world: number;

        /** PropCfgItem icon_path. */
        public icon_path: string;

        /** PropCfgItem sale_price. */
        public sale_price: number;

        /**
         * Encodes the specified PropCfgItem message. Does not implicitly {@link farm.PropCfgItem.verify|verify} messages.
         * @param m PropCfgItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IPropCfgItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PropCfgItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PropCfgItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.PropCfgItem;

        /**
         * Creates a PropCfgItem message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns PropCfgItem
         */
        public static fromObject(d: { [k: string]: any }): farm.PropCfgItem;

        /**
         * Creates a plain object from a PropCfgItem message. Also converts values to other types if specified.
         * @param m PropCfgItem
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.PropCfgItem, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PropCfgItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConditionItem. */
    interface IConditionItem {

        /** ConditionItem type */
        type?: (number|null);

        /** ConditionItem value */
        value?: (number[]|null);
    }

    /** Represents a ConditionItem. */
    class ConditionItem implements IConditionItem {

        /**
         * Constructs a new ConditionItem.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IConditionItem);

        /** ConditionItem type. */
        public type: number;

        /** ConditionItem value. */
        public value: number[];

        /**
         * Encodes the specified ConditionItem message. Does not implicitly {@link farm.ConditionItem.verify|verify} messages.
         * @param m ConditionItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IConditionItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConditionItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ConditionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ConditionItem;

        /**
         * Creates a ConditionItem message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ConditionItem
         */
        public static fromObject(d: { [k: string]: any }): farm.ConditionItem;

        /**
         * Creates a plain object from a ConditionItem message. Also converts values to other types if specified.
         * @param m ConditionItem
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ConditionItem, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConditionItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Upgrade. */
    interface IUpgrade {

        /** Upgrade level */
        level?: (number|null);

        /** Upgrade build_dur */
        build_dur?: (number|null);

        /** Upgrade build_costs */
        build_costs?: (farm.IConditionItem[]|null);

        /** Upgrade build_condition */
        build_condition?: (farm.IConditionItem[]|null);

        /** Upgrade upgrade_param */
        upgrade_param?: (number[]|null);

        /** Upgrade build_desc */
        build_desc?: (string|null);

        /** Upgrade prefab */
        prefab?: (string|null);
    }

    /** Represents an Upgrade. */
    class Upgrade implements IUpgrade {

        /**
         * Constructs a new Upgrade.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IUpgrade);

        /** Upgrade level. */
        public level: number;

        /** Upgrade build_dur. */
        public build_dur: number;

        /** Upgrade build_costs. */
        public build_costs: farm.IConditionItem[];

        /** Upgrade build_condition. */
        public build_condition: farm.IConditionItem[];

        /** Upgrade upgrade_param. */
        public upgrade_param: number[];

        /** Upgrade build_desc. */
        public build_desc: string;

        /** Upgrade prefab. */
        public prefab: string;

        /**
         * Encodes the specified Upgrade message. Does not implicitly {@link farm.Upgrade.verify|verify} messages.
         * @param m Upgrade message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IUpgrade, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Upgrade message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Upgrade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.Upgrade;

        /**
         * Creates an Upgrade message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Upgrade
         */
        public static fromObject(d: { [k: string]: any }): farm.Upgrade;

        /**
         * Creates a plain object from an Upgrade message. Also converts values to other types if specified.
         * @param m Upgrade
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.Upgrade, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Upgrade to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildCfgItem. */
    interface IBuildCfgItem {

        /** BuildCfgItem id */
        id?: (number|null);

        /** BuildCfgItem name */
        name?: (string|null);

        /** BuildCfgItem type */
        type?: (number|null);

        /** BuildCfgItem floor_space */
        floor_space?: (number[]|null);

        /** BuildCfgItem rotateable */
        rotateable?: (boolean|null);

        /** BuildCfgItem moveable */
        moveable?: (boolean|null);

        /** BuildCfgItem recoverable */
        recoverable?: (boolean|null);

        /** BuildCfgItem only_one */
        only_one?: (boolean|null);

        /** BuildCfgItem upgrades */
        upgrades?: (farm.IUpgrade[]|null);

        /** BuildCfgItem position */
        position?: (farm.IPos[]|null);
    }

    /** Represents a BuildCfgItem. */
    class BuildCfgItem implements IBuildCfgItem {

        /**
         * Constructs a new BuildCfgItem.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IBuildCfgItem);

        /** BuildCfgItem id. */
        public id: number;

        /** BuildCfgItem name. */
        public name: string;

        /** BuildCfgItem type. */
        public type: number;

        /** BuildCfgItem floor_space. */
        public floor_space: number[];

        /** BuildCfgItem rotateable. */
        public rotateable: boolean;

        /** BuildCfgItem moveable. */
        public moveable: boolean;

        /** BuildCfgItem recoverable. */
        public recoverable: boolean;

        /** BuildCfgItem only_one. */
        public only_one: boolean;

        /** BuildCfgItem upgrades. */
        public upgrades: farm.IUpgrade[];

        /** BuildCfgItem position. */
        public position: farm.IPos[];

        /**
         * Encodes the specified BuildCfgItem message. Does not implicitly {@link farm.BuildCfgItem.verify|verify} messages.
         * @param m BuildCfgItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IBuildCfgItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuildCfgItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BuildCfgItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.BuildCfgItem;

        /**
         * Creates a BuildCfgItem message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns BuildCfgItem
         */
        public static fromObject(d: { [k: string]: any }): farm.BuildCfgItem;

        /**
         * Creates a plain object from a BuildCfgItem message. Also converts values to other types if specified.
         * @param m BuildCfgItem
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.BuildCfgItem, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildCfgItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnlockCondition. */
    interface IUnlockCondition {

        /** UnlockCondition type */
        type?: (number|null);

        /** UnlockCondition value */
        value?: (number[]|null);
    }

    /** Represents an UnlockCondition. */
    class UnlockCondition implements IUnlockCondition {

        /**
         * Constructs a new UnlockCondition.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IUnlockCondition);

        /** UnlockCondition type. */
        public type: number;

        /** UnlockCondition value. */
        public value: number[];

        /**
         * Encodes the specified UnlockCondition message. Does not implicitly {@link farm.UnlockCondition.verify|verify} messages.
         * @param m UnlockCondition message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IUnlockCondition, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnlockCondition message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UnlockCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.UnlockCondition;

        /**
         * Creates an UnlockCondition message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns UnlockCondition
         */
        public static fromObject(d: { [k: string]: any }): farm.UnlockCondition;

        /**
         * Creates a plain object from an UnlockCondition message. Also converts values to other types if specified.
         * @param m UnlockCondition
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.UnlockCondition, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnlockCondition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CropCfgItem. */
    interface ICropCfgItem {

        /** CropCfgItem id */
        id?: (number|null);

        /** CropCfgItem name */
        name?: (string|null);

        /** CropCfgItem type */
        type?: (number|null);

        /** CropCfgItem grow_time */
        grow_time?: (number|null);

        /** CropCfgItem unlock_condition */
        unlock_condition?: (farm.IUnlockCondition[]|null);
    }

    /** Represents a CropCfgItem. */
    class CropCfgItem implements ICropCfgItem {

        /**
         * Constructs a new CropCfgItem.
         * @param [p] Properties to set
         */
        constructor(p?: farm.ICropCfgItem);

        /** CropCfgItem id. */
        public id: number;

        /** CropCfgItem name. */
        public name: string;

        /** CropCfgItem type. */
        public type: number;

        /** CropCfgItem grow_time. */
        public grow_time: number;

        /** CropCfgItem unlock_condition. */
        public unlock_condition: farm.IUnlockCondition[];

        /**
         * Encodes the specified CropCfgItem message. Does not implicitly {@link farm.CropCfgItem.verify|verify} messages.
         * @param m CropCfgItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.ICropCfgItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CropCfgItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CropCfgItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.CropCfgItem;

        /**
         * Creates a CropCfgItem message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns CropCfgItem
         */
        public static fromObject(d: { [k: string]: any }): farm.CropCfgItem;

        /**
         * Creates a plain object from a CropCfgItem message. Also converts values to other types if specified.
         * @param m CropCfgItem
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.CropCfgItem, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CropCfgItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespPlantCrops. */
    interface IRespPlantCrops {

        /** RespPlantCrops plant_crops */
        plant_crops?: (farm.IPlantCrop[]|null);
    }

    /** Represents a RespPlantCrops. */
    class RespPlantCrops implements IRespPlantCrops {

        /**
         * Constructs a new RespPlantCrops.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespPlantCrops);

        /** RespPlantCrops plant_crops. */
        public plant_crops: farm.IPlantCrop[];

        /**
         * Encodes the specified RespPlantCrops message. Does not implicitly {@link farm.RespPlantCrops.verify|verify} messages.
         * @param m RespPlantCrops message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespPlantCrops, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespPlantCrops message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespPlantCrops
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespPlantCrops;

        /**
         * Creates a RespPlantCrops message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespPlantCrops
         */
        public static fromObject(d: { [k: string]: any }): farm.RespPlantCrops;

        /**
         * Creates a plain object from a RespPlantCrops message. Also converts values to other types if specified.
         * @param m RespPlantCrops
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespPlantCrops, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespPlantCrops to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlantCrop. */
    interface IPlantCrop {

        /** PlantCrop id */
        id?: (number|Long|null);

        /** PlantCrop config_id */
        config_id?: (number|null);

        /** PlantCrop is_unlock */
        is_unlock?: (boolean|null);

        /** PlantCrop currency_type */
        currency_type?: (farm.CurrencyType|null);

        /** PlantCrop number */
        number?: (number|Long|null);
    }

    /** Represents a PlantCrop. */
    class PlantCrop implements IPlantCrop {

        /**
         * Constructs a new PlantCrop.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IPlantCrop);

        /** PlantCrop id. */
        public id: (number|Long);

        /** PlantCrop config_id. */
        public config_id: number;

        /** PlantCrop is_unlock. */
        public is_unlock: boolean;

        /** PlantCrop currency_type. */
        public currency_type: farm.CurrencyType;

        /** PlantCrop number. */
        public number: (number|Long);

        /**
         * Encodes the specified PlantCrop message. Does not implicitly {@link farm.PlantCrop.verify|verify} messages.
         * @param m PlantCrop message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IPlantCrop, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlantCrop message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlantCrop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.PlantCrop;

        /**
         * Creates a PlantCrop message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns PlantCrop
         */
        public static fromObject(d: { [k: string]: any }): farm.PlantCrop;

        /**
         * Creates a plain object from a PlantCrop message. Also converts values to other types if specified.
         * @param m PlantCrop
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.PlantCrop, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlantCrop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespArableLandsState. */
    interface IRespArableLandsState {

        /** RespArableLandsState arable_lands_state */
        arable_lands_state?: (farm.IArableLandState[]|null);
    }

    /** Represents a RespArableLandsState. */
    class RespArableLandsState implements IRespArableLandsState {

        /**
         * Constructs a new RespArableLandsState.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespArableLandsState);

        /** RespArableLandsState arable_lands_state. */
        public arable_lands_state: farm.IArableLandState[];

        /**
         * Encodes the specified RespArableLandsState message. Does not implicitly {@link farm.RespArableLandsState.verify|verify} messages.
         * @param m RespArableLandsState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespArableLandsState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespArableLandsState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespArableLandsState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespArableLandsState;

        /**
         * Creates a RespArableLandsState message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespArableLandsState
         */
        public static fromObject(d: { [k: string]: any }): farm.RespArableLandsState;

        /**
         * Creates a plain object from a RespArableLandsState message. Also converts values to other types if specified.
         * @param m RespArableLandsState
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespArableLandsState, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespArableLandsState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArableLandState. */
    interface IArableLandState {

        /** ArableLandState building_id */
        building_id?: (number|Long|null);

        /** ArableLandState crop_configID */
        crop_configID?: (number|null);

        /** ArableLandState time_left */
        time_left?: (number|null);
    }

    /** Represents an ArableLandState. */
    class ArableLandState implements IArableLandState {

        /**
         * Constructs a new ArableLandState.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IArableLandState);

        /** ArableLandState building_id. */
        public building_id: (number|Long);

        /** ArableLandState crop_configID. */
        public crop_configID: number;

        /** ArableLandState time_left. */
        public time_left: number;

        /**
         * Encodes the specified ArableLandState message. Does not implicitly {@link farm.ArableLandState.verify|verify} messages.
         * @param m ArableLandState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IArableLandState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArableLandState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ArableLandState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ArableLandState;

        /**
         * Creates an ArableLandState message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ArableLandState
         */
        public static fromObject(d: { [k: string]: any }): farm.ArableLandState;

        /**
         * Creates a plain object from an ArableLandState message. Also converts values to other types if specified.
         * @param m ArableLandState
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ArableLandState, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArableLandState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqCropOption. */
    interface IReqCropOption {

        /** ReqCropOption building_ids */
        building_ids?: ((number|Long)[]|null);

        /** ReqCropOption crop_cfgids */
        crop_cfgids?: (number[]|null);
    }

    /** Represents a ReqCropOption. */
    class ReqCropOption implements IReqCropOption {

        /**
         * Constructs a new ReqCropOption.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqCropOption);

        /** ReqCropOption building_ids. */
        public building_ids: (number|Long)[];

        /** ReqCropOption crop_cfgids. */
        public crop_cfgids: number[];

        /**
         * Encodes the specified ReqCropOption message. Does not implicitly {@link farm.ReqCropOption.verify|verify} messages.
         * @param m ReqCropOption message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqCropOption, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqCropOption message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqCropOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqCropOption;

        /**
         * Creates a ReqCropOption message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqCropOption
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqCropOption;

        /**
         * Creates a plain object from a ReqCropOption message. Also converts values to other types if specified.
         * @param m ReqCropOption
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqCropOption, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqCropOption to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqUnlockCrop. */
    interface IReqUnlockCrop {

        /** ReqUnlockCrop configID */
        configID?: (number|null);
    }

    /** Represents a ReqUnlockCrop. */
    class ReqUnlockCrop implements IReqUnlockCrop {

        /**
         * Constructs a new ReqUnlockCrop.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqUnlockCrop);

        /** ReqUnlockCrop configID. */
        public configID: number;

        /**
         * Encodes the specified ReqUnlockCrop message. Does not implicitly {@link farm.ReqUnlockCrop.verify|verify} messages.
         * @param m ReqUnlockCrop message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqUnlockCrop, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqUnlockCrop message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqUnlockCrop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqUnlockCrop;

        /**
         * Creates a ReqUnlockCrop message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqUnlockCrop
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqUnlockCrop;

        /**
         * Creates a plain object from a ReqUnlockCrop message. Also converts values to other types if specified.
         * @param m ReqUnlockCrop
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqUnlockCrop, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqUnlockCrop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CurrencyLeft. */
    interface ICurrencyLeft {

        /** CurrencyLeft tk_gold */
        tk_gold?: (number|Long|null);

        /** CurrencyLeft tk_crystal */
        tk_crystal?: (number|Long|null);
    }

    /** Represents a CurrencyLeft. */
    class CurrencyLeft implements ICurrencyLeft {

        /**
         * Constructs a new CurrencyLeft.
         * @param [p] Properties to set
         */
        constructor(p?: farm.ICurrencyLeft);

        /** CurrencyLeft tk_gold. */
        public tk_gold: (number|Long);

        /** CurrencyLeft tk_crystal. */
        public tk_crystal: (number|Long);

        /**
         * Encodes the specified CurrencyLeft message. Does not implicitly {@link farm.CurrencyLeft.verify|verify} messages.
         * @param m CurrencyLeft message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.ICurrencyLeft, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CurrencyLeft message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CurrencyLeft
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.CurrencyLeft;

        /**
         * Creates a CurrencyLeft message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns CurrencyLeft
         */
        public static fromObject(d: { [k: string]: any }): farm.CurrencyLeft;

        /**
         * Creates a plain object from a CurrencyLeft message. Also converts values to other types if specified.
         * @param m CurrencyLeft
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.CurrencyLeft, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CurrencyLeft to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MessageWordBubbleChanged. */
    interface IMessageWordBubbleChanged {

        /** MessageWordBubbleChanged word_bubbles */
        word_bubbles?: (farm.IWordBubble[]|null);
    }

    /** Represents a MessageWordBubbleChanged. */
    class MessageWordBubbleChanged implements IMessageWordBubbleChanged {

        /**
         * Constructs a new MessageWordBubbleChanged.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IMessageWordBubbleChanged);

        /** MessageWordBubbleChanged word_bubbles. */
        public word_bubbles: farm.IWordBubble[];

        /**
         * Encodes the specified MessageWordBubbleChanged message. Does not implicitly {@link farm.MessageWordBubbleChanged.verify|verify} messages.
         * @param m MessageWordBubbleChanged message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IMessageWordBubbleChanged, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageWordBubbleChanged message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MessageWordBubbleChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.MessageWordBubbleChanged;

        /**
         * Creates a MessageWordBubbleChanged message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MessageWordBubbleChanged
         */
        public static fromObject(d: { [k: string]: any }): farm.MessageWordBubbleChanged;

        /**
         * Creates a plain object from a MessageWordBubbleChanged message. Also converts values to other types if specified.
         * @param m MessageWordBubbleChanged
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.MessageWordBubbleChanged, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageWordBubbleChanged to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MessagePlayerInfo. */
    interface IMessagePlayerInfo {

        /** MessagePlayerInfo nick_name */
        nick_name?: (string|null);

        /** MessagePlayerInfo user_code */
        user_code?: (string|null);

        /** MessagePlayerInfo avatar_id */
        avatar_id?: (number|null);

        /** MessagePlayerInfo coin */
        coin?: (number|null);

        /** MessagePlayerInfo crystal */
        crystal?: (number|null);

        /** MessagePlayerInfo heart */
        heart?: (number|null);

        /** MessagePlayerInfo slogan */
        slogan?: (string|null);

        /** MessagePlayerInfo isMail */
        isMail?: (boolean|null);
    }

    /** Represents a MessagePlayerInfo. */
    class MessagePlayerInfo implements IMessagePlayerInfo {

        /**
         * Constructs a new MessagePlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IMessagePlayerInfo);

        /** MessagePlayerInfo nick_name. */
        public nick_name: string;

        /** MessagePlayerInfo user_code. */
        public user_code: string;

        /** MessagePlayerInfo avatar_id. */
        public avatar_id: number;

        /** MessagePlayerInfo coin. */
        public coin: number;

        /** MessagePlayerInfo crystal. */
        public crystal: number;

        /** MessagePlayerInfo heart. */
        public heart: number;

        /** MessagePlayerInfo slogan. */
        public slogan: string;

        /** MessagePlayerInfo isMail. */
        public isMail: boolean;

        /**
         * Encodes the specified MessagePlayerInfo message. Does not implicitly {@link farm.MessagePlayerInfo.verify|verify} messages.
         * @param m MessagePlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IMessagePlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessagePlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MessagePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.MessagePlayerInfo;

        /**
         * Creates a MessagePlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MessagePlayerInfo
         */
        public static fromObject(d: { [k: string]: any }): farm.MessagePlayerInfo;

        /**
         * Creates a plain object from a MessagePlayerInfo message. Also converts values to other types if specified.
         * @param m MessagePlayerInfo
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.MessagePlayerInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessagePlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WordBubble. */
    interface IWordBubble {

        /** WordBubble word_id */
        word_id?: (number|null);

        /** WordBubble building_id */
        building_id?: (number|Long|null);
    }

    /** Represents a WordBubble. */
    class WordBubble implements IWordBubble {

        /**
         * Constructs a new WordBubble.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IWordBubble);

        /** WordBubble word_id. */
        public word_id: number;

        /** WordBubble building_id. */
        public building_id: (number|Long);

        /**
         * Encodes the specified WordBubble message. Does not implicitly {@link farm.WordBubble.verify|verify} messages.
         * @param m WordBubble message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IWordBubble, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WordBubble message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WordBubble
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.WordBubble;

        /**
         * Creates a WordBubble message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns WordBubble
         */
        public static fromObject(d: { [k: string]: any }): farm.WordBubble;

        /**
         * Creates a plain object from a WordBubble message. Also converts values to other types if specified.
         * @param m WordBubble
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.WordBubble, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WordBubble to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqWordBubbleEnd. */
    interface IReqWordBubbleEnd {

        /** ReqWordBubbleEnd word_id */
        word_id?: (number|null);

        /** ReqWordBubbleEnd building_id */
        building_id?: (number|Long|null);
    }

    /** Represents a ReqWordBubbleEnd. */
    class ReqWordBubbleEnd implements IReqWordBubbleEnd {

        /**
         * Constructs a new ReqWordBubbleEnd.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqWordBubbleEnd);

        /** ReqWordBubbleEnd word_id. */
        public word_id: number;

        /** ReqWordBubbleEnd building_id. */
        public building_id: (number|Long);

        /**
         * Encodes the specified ReqWordBubbleEnd message. Does not implicitly {@link farm.ReqWordBubbleEnd.verify|verify} messages.
         * @param m ReqWordBubbleEnd message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqWordBubbleEnd, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqWordBubbleEnd message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqWordBubbleEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqWordBubbleEnd;

        /**
         * Creates a ReqWordBubbleEnd message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqWordBubbleEnd
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqWordBubbleEnd;

        /**
         * Creates a plain object from a ReqWordBubbleEnd message. Also converts values to other types if specified.
         * @param m ReqWordBubbleEnd
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqWordBubbleEnd, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqWordBubbleEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqUpdateBillboards. */
    interface IReqUpdateBillboards {

        /** ReqUpdateBillboards content */
        content?: (string|null);
    }

    /** Represents a ReqUpdateBillboards. */
    class ReqUpdateBillboards implements IReqUpdateBillboards {

        /**
         * Constructs a new ReqUpdateBillboards.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqUpdateBillboards);

        /** ReqUpdateBillboards content. */
        public content: string;

        /**
         * Encodes the specified ReqUpdateBillboards message. Does not implicitly {@link farm.ReqUpdateBillboards.verify|verify} messages.
         * @param m ReqUpdateBillboards message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqUpdateBillboards, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqUpdateBillboards message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqUpdateBillboards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqUpdateBillboards;

        /**
         * Creates a ReqUpdateBillboards message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqUpdateBillboards
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqUpdateBillboards;

        /**
         * Creates a plain object from a ReqUpdateBillboards message. Also converts values to other types if specified.
         * @param m ReqUpdateBillboards
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqUpdateBillboards, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqUpdateBillboards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespMailList. */
    interface IRespMailList {

        /** RespMailList mails */
        mails?: (farm.IMailListItem[]|null);
    }

    /** Represents a RespMailList. */
    class RespMailList implements IRespMailList {

        /**
         * Constructs a new RespMailList.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespMailList);

        /** RespMailList mails. */
        public mails: farm.IMailListItem[];

        /**
         * Encodes the specified RespMailList message. Does not implicitly {@link farm.RespMailList.verify|verify} messages.
         * @param m RespMailList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespMailList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespMailList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespMailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespMailList;

        /**
         * Creates a RespMailList message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespMailList
         */
        public static fromObject(d: { [k: string]: any }): farm.RespMailList;

        /**
         * Creates a plain object from a RespMailList message. Also converts values to other types if specified.
         * @param m RespMailList
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespMailList, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespMailList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailListItem. */
    interface IMailListItem {

        /** MailListItem id */
        id?: (number|Long|null);

        /** MailListItem type */
        type?: (farm.MailType|null);

        /** MailListItem sender_uid */
        sender_uid?: (number|Long|null);

        /** MailListItem title */
        title?: (string|null);

        /** MailListItem status */
        status?: (farm.MailState|null);
    }

    /** Represents a MailListItem. */
    class MailListItem implements IMailListItem {

        /**
         * Constructs a new MailListItem.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IMailListItem);

        /** MailListItem id. */
        public id: (number|Long);

        /** MailListItem type. */
        public type: farm.MailType;

        /** MailListItem sender_uid. */
        public sender_uid: (number|Long);

        /** MailListItem title. */
        public title: string;

        /** MailListItem status. */
        public status: farm.MailState;

        /**
         * Encodes the specified MailListItem message. Does not implicitly {@link farm.MailListItem.verify|verify} messages.
         * @param m MailListItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IMailListItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MailListItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MailListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.MailListItem;

        /**
         * Creates a MailListItem message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MailListItem
         */
        public static fromObject(d: { [k: string]: any }): farm.MailListItem;

        /**
         * Creates a plain object from a MailListItem message. Also converts values to other types if specified.
         * @param m MailListItem
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.MailListItem, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailListItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespMailDetail. */
    interface IRespMailDetail {

        /** RespMailDetail id */
        id?: (number|Long|null);

        /** RespMailDetail content */
        content?: (string|null);

        /** RespMailDetail annexes */
        annexes?: (farm.IAnnex[]|null);

        /** RespMailDetail type */
        type?: (farm.MailTapType|null);
    }

    /** Represents a RespMailDetail. */
    class RespMailDetail implements IRespMailDetail {

        /**
         * Constructs a new RespMailDetail.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespMailDetail);

        /** RespMailDetail id. */
        public id: (number|Long);

        /** RespMailDetail content. */
        public content: string;

        /** RespMailDetail annexes. */
        public annexes: farm.IAnnex[];

        /** RespMailDetail type. */
        public type: farm.MailTapType;

        /**
         * Encodes the specified RespMailDetail message. Does not implicitly {@link farm.RespMailDetail.verify|verify} messages.
         * @param m RespMailDetail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespMailDetail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespMailDetail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespMailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespMailDetail;

        /**
         * Creates a RespMailDetail message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespMailDetail
         */
        public static fromObject(d: { [k: string]: any }): farm.RespMailDetail;

        /**
         * Creates a plain object from a RespMailDetail message. Also converts values to other types if specified.
         * @param m RespMailDetail
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespMailDetail, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespMailDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Annex. */
    interface IAnnex {

        /** Annex annex_id */
        annex_id?: (number|Long|null);

        /** Annex status */
        status?: (farm.AnnexState|null);

        /** Annex num */
        num?: (number|null);
    }

    /** Represents an Annex. */
    class Annex implements IAnnex {

        /**
         * Constructs a new Annex.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IAnnex);

        /** Annex annex_id. */
        public annex_id: (number|Long);

        /** Annex status. */
        public status: farm.AnnexState;

        /** Annex num. */
        public num: number;

        /**
         * Encodes the specified Annex message. Does not implicitly {@link farm.Annex.verify|verify} messages.
         * @param m Annex message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IAnnex, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Annex message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Annex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.Annex;

        /**
         * Creates an Annex message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Annex
         */
        public static fromObject(d: { [k: string]: any }): farm.Annex;

        /**
         * Creates a plain object from an Annex message. Also converts values to other types if specified.
         * @param m Annex
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.Annex, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Annex to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqReceiveAnnex. */
    interface IReqReceiveAnnex {

        /** ReqReceiveAnnex annexIDs */
        annexIDs?: ((number|Long)[]|null);

        /** ReqReceiveAnnex mail_id */
        mail_id?: (number|Long|null);
    }

    /** Represents a ReqReceiveAnnex. */
    class ReqReceiveAnnex implements IReqReceiveAnnex {

        /**
         * Constructs a new ReqReceiveAnnex.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqReceiveAnnex);

        /** ReqReceiveAnnex annexIDs. */
        public annexIDs: (number|Long)[];

        /** ReqReceiveAnnex mail_id. */
        public mail_id: (number|Long);

        /**
         * Encodes the specified ReqReceiveAnnex message. Does not implicitly {@link farm.ReqReceiveAnnex.verify|verify} messages.
         * @param m ReqReceiveAnnex message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqReceiveAnnex, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqReceiveAnnex message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqReceiveAnnex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqReceiveAnnex;

        /**
         * Creates a ReqReceiveAnnex message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqReceiveAnnex
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqReceiveAnnex;

        /**
         * Creates a plain object from a ReqReceiveAnnex message. Also converts values to other types if specified.
         * @param m ReqReceiveAnnex
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqReceiveAnnex, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqReceiveAnnex to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** QuestState enum. */
    enum QuestState {
        Pending = 0,
        Unlocked = 1,
        Inprogress = 2,
        Complete = 3,
        Cancel = 4,
        Done = 5
    }

    /** DialogStageType enum. */
    enum DialogStageType {
        NPCDialog = 0,
        PhoneDialog = 1,
        QuestBoardDialog = 2
    }

    /** Properties of a MessagePhoneCall. */
    interface IMessagePhoneCall {

        /** MessagePhoneCall char_config_id */
        char_config_id?: (number|null);

        /** MessagePhoneCall dlg_stage_id */
        dlg_stage_id?: (number|null);
    }

    /** Represents a MessagePhoneCall. */
    class MessagePhoneCall implements IMessagePhoneCall {

        /**
         * Constructs a new MessagePhoneCall.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IMessagePhoneCall);

        /** MessagePhoneCall char_config_id. */
        public char_config_id: number;

        /** MessagePhoneCall dlg_stage_id. */
        public dlg_stage_id: number;

        /**
         * Encodes the specified MessagePhoneCall message. Does not implicitly {@link farm.MessagePhoneCall.verify|verify} messages.
         * @param m MessagePhoneCall message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IMessagePhoneCall, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessagePhoneCall message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MessagePhoneCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.MessagePhoneCall;

        /**
         * Creates a MessagePhoneCall message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MessagePhoneCall
         */
        public static fromObject(d: { [k: string]: any }): farm.MessagePhoneCall;

        /**
         * Creates a plain object from a MessagePhoneCall message. Also converts values to other types if specified.
         * @param m MessagePhoneCall
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.MessagePhoneCall, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessagePhoneCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuestData. */
    interface IQuestData {

        /** QuestData id */
        id?: (number|Long|null);

        /** QuestData config_id */
        config_id?: (number|null);

        /** QuestData state */
        state?: (farm.QuestState|null);

        /** QuestData left_dur */
        left_dur?: (number|Long|null);

        /** QuestData task_data */
        task_data?: (number[]|null);
    }

    /** Represents a QuestData. */
    class QuestData implements IQuestData {

        /**
         * Constructs a new QuestData.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IQuestData);

        /** QuestData id. */
        public id: (number|Long);

        /** QuestData config_id. */
        public config_id: number;

        /** QuestData state. */
        public state: farm.QuestState;

        /** QuestData left_dur. */
        public left_dur: (number|Long);

        /** QuestData task_data. */
        public task_data: number[];

        /**
         * Encodes the specified QuestData message. Does not implicitly {@link farm.QuestData.verify|verify} messages.
         * @param m QuestData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IQuestData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuestData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QuestData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.QuestData;

        /**
         * Creates a QuestData message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns QuestData
         */
        public static fromObject(d: { [k: string]: any }): farm.QuestData;

        /**
         * Creates a plain object from a QuestData message. Also converts values to other types if specified.
         * @param m QuestData
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.QuestData, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuestData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MessageQuestList. */
    interface IMessageQuestList {

        /** MessageQuestList quests */
        quests?: (farm.IQuestData[]|null);

        /** MessageQuestList done_quest_count_today */
        done_quest_count_today?: (number|null);

        /** MessageQuestList extra_award_left_times */
        extra_award_left_times?: (number|null);

        /** MessageQuestList daily_circle_quest_next_cost */
        daily_circle_quest_next_cost?: (number|null);
    }

    /** Represents a MessageQuestList. */
    class MessageQuestList implements IMessageQuestList {

        /**
         * Constructs a new MessageQuestList.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IMessageQuestList);

        /** MessageQuestList quests. */
        public quests: farm.IQuestData[];

        /** MessageQuestList done_quest_count_today. */
        public done_quest_count_today: number;

        /** MessageQuestList extra_award_left_times. */
        public extra_award_left_times: number;

        /** MessageQuestList daily_circle_quest_next_cost. */
        public daily_circle_quest_next_cost: number;

        /**
         * Encodes the specified MessageQuestList message. Does not implicitly {@link farm.MessageQuestList.verify|verify} messages.
         * @param m MessageQuestList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IMessageQuestList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageQuestList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MessageQuestList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.MessageQuestList;

        /**
         * Creates a MessageQuestList message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MessageQuestList
         */
        public static fromObject(d: { [k: string]: any }): farm.MessageQuestList;

        /**
         * Creates a plain object from a MessageQuestList message. Also converts values to other types if specified.
         * @param m MessageQuestList
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.MessageQuestList, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageQuestList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MessageQuestUpdate. */
    interface IMessageQuestUpdate {

        /** MessageQuestUpdate quest */
        quest?: (farm.IQuestData|null);

        /** MessageQuestUpdate heard_count */
        heard_count?: (number|null);

        /** MessageQuestUpdate done_quest_count_today */
        done_quest_count_today?: (number|null);

        /** MessageQuestUpdate extra_award_left_times */
        extra_award_left_times?: (number|null);
    }

    /** Represents a MessageQuestUpdate. */
    class MessageQuestUpdate implements IMessageQuestUpdate {

        /**
         * Constructs a new MessageQuestUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IMessageQuestUpdate);

        /** MessageQuestUpdate quest. */
        public quest?: (farm.IQuestData|null);

        /** MessageQuestUpdate heard_count. */
        public heard_count: number;

        /** MessageQuestUpdate done_quest_count_today. */
        public done_quest_count_today: number;

        /** MessageQuestUpdate extra_award_left_times. */
        public extra_award_left_times: number;

        /**
         * Encodes the specified MessageQuestUpdate message. Does not implicitly {@link farm.MessageQuestUpdate.verify|verify} messages.
         * @param m MessageQuestUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IMessageQuestUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageQuestUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MessageQuestUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.MessageQuestUpdate;

        /**
         * Creates a MessageQuestUpdate message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MessageQuestUpdate
         */
        public static fromObject(d: { [k: string]: any }): farm.MessageQuestUpdate;

        /**
         * Creates a plain object from a MessageQuestUpdate message. Also converts values to other types if specified.
         * @param m MessageQuestUpdate
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.MessageQuestUpdate, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageQuestUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqQuestGainExtraAward. */
    interface IReqQuestGainExtraAward {

        /** ReqQuestGainExtraAward extend */
        extend?: (number|null);
    }

    /** Represents a ReqQuestGainExtraAward. */
    class ReqQuestGainExtraAward implements IReqQuestGainExtraAward {

        /**
         * Constructs a new ReqQuestGainExtraAward.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqQuestGainExtraAward);

        /** ReqQuestGainExtraAward extend. */
        public extend: number;

        /**
         * Encodes the specified ReqQuestGainExtraAward message. Does not implicitly {@link farm.ReqQuestGainExtraAward.verify|verify} messages.
         * @param m ReqQuestGainExtraAward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqQuestGainExtraAward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqQuestGainExtraAward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqQuestGainExtraAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqQuestGainExtraAward;

        /**
         * Creates a ReqQuestGainExtraAward message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqQuestGainExtraAward
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqQuestGainExtraAward;

        /**
         * Creates a plain object from a ReqQuestGainExtraAward message. Also converts values to other types if specified.
         * @param m ReqQuestGainExtraAward
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqQuestGainExtraAward, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqQuestGainExtraAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespQuestGainExtraAWard. */
    interface IRespQuestGainExtraAWard {

        /** RespQuestGainExtraAWard extra_award_left_times */
        extra_award_left_times?: (number|null);
    }

    /** Represents a RespQuestGainExtraAWard. */
    class RespQuestGainExtraAWard implements IRespQuestGainExtraAWard {

        /**
         * Constructs a new RespQuestGainExtraAWard.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespQuestGainExtraAWard);

        /** RespQuestGainExtraAWard extra_award_left_times. */
        public extra_award_left_times: number;

        /**
         * Encodes the specified RespQuestGainExtraAWard message. Does not implicitly {@link farm.RespQuestGainExtraAWard.verify|verify} messages.
         * @param m RespQuestGainExtraAWard message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespQuestGainExtraAWard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespQuestGainExtraAWard message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespQuestGainExtraAWard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespQuestGainExtraAWard;

        /**
         * Creates a RespQuestGainExtraAWard message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespQuestGainExtraAWard
         */
        public static fromObject(d: { [k: string]: any }): farm.RespQuestGainExtraAWard;

        /**
         * Creates a plain object from a RespQuestGainExtraAWard message. Also converts values to other types if specified.
         * @param m RespQuestGainExtraAWard
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespQuestGainExtraAWard, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespQuestGainExtraAWard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqQuestGainDailyCircleOne. */
    interface IReqQuestGainDailyCircleOne {

        /** ReqQuestGainDailyCircleOne extend */
        extend?: (number|null);
    }

    /** Represents a ReqQuestGainDailyCircleOne. */
    class ReqQuestGainDailyCircleOne implements IReqQuestGainDailyCircleOne {

        /**
         * Constructs a new ReqQuestGainDailyCircleOne.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqQuestGainDailyCircleOne);

        /** ReqQuestGainDailyCircleOne extend. */
        public extend: number;

        /**
         * Encodes the specified ReqQuestGainDailyCircleOne message. Does not implicitly {@link farm.ReqQuestGainDailyCircleOne.verify|verify} messages.
         * @param m ReqQuestGainDailyCircleOne message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqQuestGainDailyCircleOne, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqQuestGainDailyCircleOne message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqQuestGainDailyCircleOne
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqQuestGainDailyCircleOne;

        /**
         * Creates a ReqQuestGainDailyCircleOne message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqQuestGainDailyCircleOne
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqQuestGainDailyCircleOne;

        /**
         * Creates a plain object from a ReqQuestGainDailyCircleOne message. Also converts values to other types if specified.
         * @param m ReqQuestGainDailyCircleOne
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqQuestGainDailyCircleOne, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqQuestGainDailyCircleOne to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespQuestGainDailyCircleOne. */
    interface IRespQuestGainDailyCircleOne {

        /** RespQuestGainDailyCircleOne daily_circle_quest_next_cost */
        daily_circle_quest_next_cost?: (number|null);
    }

    /** Represents a RespQuestGainDailyCircleOne. */
    class RespQuestGainDailyCircleOne implements IRespQuestGainDailyCircleOne {

        /**
         * Constructs a new RespQuestGainDailyCircleOne.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespQuestGainDailyCircleOne);

        /** RespQuestGainDailyCircleOne daily_circle_quest_next_cost. */
        public daily_circle_quest_next_cost: number;

        /**
         * Encodes the specified RespQuestGainDailyCircleOne message. Does not implicitly {@link farm.RespQuestGainDailyCircleOne.verify|verify} messages.
         * @param m RespQuestGainDailyCircleOne message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespQuestGainDailyCircleOne, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespQuestGainDailyCircleOne message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespQuestGainDailyCircleOne
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespQuestGainDailyCircleOne;

        /**
         * Creates a RespQuestGainDailyCircleOne message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespQuestGainDailyCircleOne
         */
        public static fromObject(d: { [k: string]: any }): farm.RespQuestGainDailyCircleOne;

        /**
         * Creates a plain object from a RespQuestGainDailyCircleOne message. Also converts values to other types if specified.
         * @param m RespQuestGainDailyCircleOne
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespQuestGainDailyCircleOne, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespQuestGainDailyCircleOne to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqDlgStageDone. */
    interface IReqDlgStageDone {

        /** ReqDlgStageDone dlg_stage_id */
        dlg_stage_id?: (number|null);

        /** ReqDlgStageDone state */
        state?: (number|null);

        /** ReqDlgStageDone metadata */
        metadata?: ({ [k: string]: string }|null);

        /** ReqDlgStageDone stageType */
        stageType?: (farm.DialogStageType|null);
    }

    /** Represents a ReqDlgStageDone. */
    class ReqDlgStageDone implements IReqDlgStageDone {

        /**
         * Constructs a new ReqDlgStageDone.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IReqDlgStageDone);

        /** ReqDlgStageDone dlg_stage_id. */
        public dlg_stage_id: number;

        /** ReqDlgStageDone state. */
        public state: number;

        /** ReqDlgStageDone metadata. */
        public metadata: { [k: string]: string };

        /** ReqDlgStageDone stageType. */
        public stageType: farm.DialogStageType;

        /**
         * Encodes the specified ReqDlgStageDone message. Does not implicitly {@link farm.ReqDlgStageDone.verify|verify} messages.
         * @param m ReqDlgStageDone message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IReqDlgStageDone, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqDlgStageDone message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqDlgStageDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.ReqDlgStageDone;

        /**
         * Creates a ReqDlgStageDone message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqDlgStageDone
         */
        public static fromObject(d: { [k: string]: any }): farm.ReqDlgStageDone;

        /**
         * Creates a plain object from a ReqDlgStageDone message. Also converts values to other types if specified.
         * @param m ReqDlgStageDone
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.ReqDlgStageDone, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqDlgStageDone to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespDlgStageDone. */
    interface IRespDlgStageDone {

        /** RespDlgStageDone dlg_stage_id */
        dlg_stage_id?: (number|null);
    }

    /** Represents a RespDlgStageDone. */
    class RespDlgStageDone implements IRespDlgStageDone {

        /**
         * Constructs a new RespDlgStageDone.
         * @param [p] Properties to set
         */
        constructor(p?: farm.IRespDlgStageDone);

        /** RespDlgStageDone dlg_stage_id. */
        public dlg_stage_id: number;

        /**
         * Encodes the specified RespDlgStageDone message. Does not implicitly {@link farm.RespDlgStageDone.verify|verify} messages.
         * @param m RespDlgStageDone message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: farm.IRespDlgStageDone, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespDlgStageDone message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespDlgStageDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): farm.RespDlgStageDone;

        /**
         * Creates a RespDlgStageDone message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespDlgStageDone
         */
        public static fromObject(d: { [k: string]: any }): farm.RespDlgStageDone;

        /**
         * Creates a plain object from a RespDlgStageDone message. Also converts values to other types if specified.
         * @param m RespDlgStageDone
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: farm.RespDlgStageDone, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespDlgStageDone to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace message. */
export namespace message {

    /** Properties of an EventBasic. */
    interface IEventBasic {

        /** EventBasic metadata */
        metadata?: ({ [k: string]: string }|null);
    }

    /** Represents an EventBasic. */
    class EventBasic implements IEventBasic {

        /**
         * Constructs a new EventBasic.
         * @param [p] Properties to set
         */
        constructor(p?: message.IEventBasic);

        /** EventBasic metadata. */
        public metadata: { [k: string]: string };

        /**
         * Encodes the specified EventBasic message. Does not implicitly {@link message.EventBasic.verify|verify} messages.
         * @param m EventBasic message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.IEventBasic, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventBasic message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EventBasic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.EventBasic;

        /**
         * Creates an EventBasic message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns EventBasic
         */
        public static fromObject(d: { [k: string]: any }): message.EventBasic;

        /**
         * Creates a plain object from an EventBasic message. Also converts values to other types if specified.
         * @param m EventBasic
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: message.EventBasic, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventBasic to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestBasic. */
    interface IRequestBasic {

        /** RequestBasic params */
        params?: ({ [k: string]: string }|null);
    }

    /** Represents a RequestBasic. */
    class RequestBasic implements IRequestBasic {

        /**
         * Constructs a new RequestBasic.
         * @param [p] Properties to set
         */
        constructor(p?: message.IRequestBasic);

        /** RequestBasic params. */
        public params: { [k: string]: string };

        /**
         * Encodes the specified RequestBasic message. Does not implicitly {@link message.RequestBasic.verify|verify} messages.
         * @param m RequestBasic message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.IRequestBasic, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestBasic message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RequestBasic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.RequestBasic;

        /**
         * Creates a RequestBasic message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RequestBasic
         */
        public static fromObject(d: { [k: string]: any }): message.RequestBasic;

        /**
         * Creates a plain object from a RequestBasic message. Also converts values to other types if specified.
         * @param m RequestBasic
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: message.RequestBasic, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestBasic to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message id */
        id?: (number|Long|null);

        /** Message type */
        type?: (message.Message.Type|null);

        /** Message version */
        version?: (string|null);

        /** Message jwt_token */
        jwt_token?: (string|null);

        /** Message dat */
        dat?: (google.protobuf.IAny|null);

        /** Message timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [p] Properties to set
         */
        constructor(p?: message.IMessage);

        /** Message id. */
        public id: (number|Long);

        /** Message type. */
        public type: message.Message.Type;

        /** Message version. */
        public version: string;

        /** Message jwt_token. */
        public jwt_token: string;

        /** Message dat. */
        public dat?: (google.protobuf.IAny|null);

        /** Message timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /**
         * Encodes the specified Message message. Does not implicitly {@link message.Message.verify|verify} messages.
         * @param m Message message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.IMessage, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.Message;

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Message
         */
        public static fromObject(d: { [k: string]: any }): message.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param m Message
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: message.Message, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Message {

        /** Type enum. */
        enum Type {
            EVENT_BASIC = 0,
            NOTIFY_BASIC = 100000,
            STREAM_BASIC = 200000
        }
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request version */
        version?: (string|null);

        /** Request jwt_token */
        jwt_token?: (string|null);

        /** Request dat */
        dat?: (google.protobuf.IAny|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [p] Properties to set
         */
        constructor(p?: message.IRequest);

        /** Request version. */
        public version: string;

        /** Request jwt_token. */
        public jwt_token: string;

        /** Request dat. */
        public dat?: (google.protobuf.IAny|null);

        /**
         * Encodes the specified Request message. Does not implicitly {@link message.Request.verify|verify} messages.
         * @param m Request message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.IRequest, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.Request;

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Request
         */
        public static fromObject(d: { [k: string]: any }): message.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param m Request
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: message.Request, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response err */
        err?: (number|null);

        /** Response message */
        message?: (string|null);

        /** Response trace_id */
        trace_id?: (string|null);

        /** Response dat */
        dat?: (google.protobuf.IAny|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [p] Properties to set
         */
        constructor(p?: message.IResponse);

        /** Response err. */
        public err: number;

        /** Response message. */
        public message: string;

        /** Response trace_id. */
        public trace_id: string;

        /** Response dat. */
        public dat?: (google.protobuf.IAny|null);

        /**
         * Encodes the specified Response message. Does not implicitly {@link message.Response.verify|verify} messages.
         * @param m Response message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.IResponse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.Response;

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Response
         */
        public static fromObject(d: { [k: string]: any }): message.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param m Response
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: message.Response, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotifyBasic. */
    interface INotifyBasic {
    }

    /** Represents a NotifyBasic. */
    class NotifyBasic implements INotifyBasic {

        /**
         * Constructs a new NotifyBasic.
         * @param [p] Properties to set
         */
        constructor(p?: message.INotifyBasic);

        /**
         * Encodes the specified NotifyBasic message. Does not implicitly {@link message.NotifyBasic.verify|verify} messages.
         * @param m NotifyBasic message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.INotifyBasic, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyBasic message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns NotifyBasic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.NotifyBasic;

        /**
         * Creates a NotifyBasic message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns NotifyBasic
         */
        public static fromObject(d: { [k: string]: any }): message.NotifyBasic;

        /**
         * Creates a plain object from a NotifyBasic message. Also converts values to other types if specified.
         * @param m NotifyBasic
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: message.NotifyBasic, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyBasic to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqCustomTest. */
    interface IReqCustomTest {

        /** ReqCustomTest intValue */
        intValue?: (number|null);

        /** ReqCustomTest strValue */
        strValue?: (string|null);

        /** ReqCustomTest boolValue */
        boolValue?: (boolean[]|null);

        /** ReqCustomTest mapValue */
        mapValue?: ({ [k: string]: string }|null);
    }

    /** Represents a ReqCustomTest. */
    class ReqCustomTest implements IReqCustomTest {

        /**
         * Constructs a new ReqCustomTest.
         * @param [p] Properties to set
         */
        constructor(p?: message.IReqCustomTest);

        /** ReqCustomTest intValue. */
        public intValue: number;

        /** ReqCustomTest strValue. */
        public strValue: string;

        /** ReqCustomTest boolValue. */
        public boolValue: boolean[];

        /** ReqCustomTest mapValue. */
        public mapValue: { [k: string]: string };

        /**
         * Encodes the specified ReqCustomTest message. Does not implicitly {@link message.ReqCustomTest.verify|verify} messages.
         * @param m ReqCustomTest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.IReqCustomTest, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqCustomTest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqCustomTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.ReqCustomTest;

        /**
         * Creates a ReqCustomTest message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ReqCustomTest
         */
        public static fromObject(d: { [k: string]: any }): message.ReqCustomTest;

        /**
         * Creates a plain object from a ReqCustomTest message. Also converts values to other types if specified.
         * @param m ReqCustomTest
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: message.ReqCustomTest, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqCustomTest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RespCustomTest. */
    interface IRespCustomTest {

        /** RespCustomTest intValue */
        intValue?: (number|null);

        /** RespCustomTest strValue */
        strValue?: (string|null);

        /** RespCustomTest boolValue */
        boolValue?: (boolean[]|null);

        /** RespCustomTest mapValue */
        mapValue?: ({ [k: string]: string }|null);
    }

    /** Represents a RespCustomTest. */
    class RespCustomTest implements IRespCustomTest {

        /**
         * Constructs a new RespCustomTest.
         * @param [p] Properties to set
         */
        constructor(p?: message.IRespCustomTest);

        /** RespCustomTest intValue. */
        public intValue: number;

        /** RespCustomTest strValue. */
        public strValue: string;

        /** RespCustomTest boolValue. */
        public boolValue: boolean[];

        /** RespCustomTest mapValue. */
        public mapValue: { [k: string]: string };

        /**
         * Encodes the specified RespCustomTest message. Does not implicitly {@link message.RespCustomTest.verify|verify} messages.
         * @param m RespCustomTest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.IRespCustomTest, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespCustomTest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RespCustomTest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.RespCustomTest;

        /**
         * Creates a RespCustomTest message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns RespCustomTest
         */
        public static fromObject(d: { [k: string]: any }): message.RespCustomTest;

        /**
         * Creates a plain object from a RespCustomTest message. Also converts values to other types if specified.
         * @param m RespCustomTest
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: message.RespCustomTest, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespCustomTest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SimpleStruct. */
    interface ISimpleStruct {

        /** SimpleStruct intValue */
        intValue?: (number|null);

        /** SimpleStruct boolValue */
        boolValue?: (boolean|null);

        /** SimpleStruct strValue */
        strValue?: (string|null);
    }

    /** Represents a SimpleStruct. */
    class SimpleStruct implements ISimpleStruct {

        /**
         * Constructs a new SimpleStruct.
         * @param [p] Properties to set
         */
        constructor(p?: message.ISimpleStruct);

        /** SimpleStruct intValue. */
        public intValue: number;

        /** SimpleStruct boolValue. */
        public boolValue: boolean;

        /** SimpleStruct strValue. */
        public strValue: string;

        /**
         * Encodes the specified SimpleStruct message. Does not implicitly {@link message.SimpleStruct.verify|verify} messages.
         * @param m SimpleStruct message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ISimpleStruct, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SimpleStruct message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SimpleStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.SimpleStruct;

        /**
         * Creates a SimpleStruct message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns SimpleStruct
         */
        public static fromObject(d: { [k: string]: any }): message.SimpleStruct;

        /**
         * Creates a plain object from a SimpleStruct message. Also converts values to other types if specified.
         * @param m SimpleStruct
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(m: message.SimpleStruct, o?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SimpleStruct to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [p] Properties to set
             */
            constructor(p?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param m Any message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: google.protobuf.IAny, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.Any;

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns Any
             */
            public static fromObject(d: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param m Any
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: google.protobuf.Any, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [p] Properties to set
             */
            constructor(p?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param m Timestamp message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: google.protobuf.ITimestamp, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.Timestamp;

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns Timestamp
             */
            public static fromObject(d: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param m Timestamp
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: google.protobuf.Timestamp, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace error. */
export namespace error {

    /** Type enum. */
    enum Type {
        NONE = 0
    }
}